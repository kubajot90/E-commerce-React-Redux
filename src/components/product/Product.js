import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Accordion from './Accordion';
import ProductsSlider from '../main/ProductsSlider';
import InformationBox from './InformationBox';
import { BsHeart, BsHandbag } from 'react-icons/bs';
import classes from './Product.module.css';
import fetchProductsData from '../../store/productsSlice';
import { cartActions } from '../../store/cartSlice';


const Product =()=> {
    const sizeSelectRef = useRef();
    const fetchProducts = useSelector(state => state.products.data);
    const products = useSelector(state => state.cart.productsInCart);
    const dispatch = useDispatch();
  
    const location = useLocation();

    const {image, title, price, description, category} = location.state;
    const categoryUrl = category.replace(/\s/g,'_');
    
    const [discount, setDiscount] = useState(Math.floor(Math.random() * 45));
    const [discountPrice, setDiscountPrice] = useState(0);

    
    useEffect(()=>{
        window.scrollTo(0,0);
        dispatch(fetchProductsData());
        calculateDiscount();
        },[]);
    
    const addToCart =()=> {
        const product = {
            ...location.state, 
            size: sizeSelectRef.current.value,
            amount: 1
        };
        dispatch(cartActions.addToCart(product));
        console.log('products: ', products);
    }
        
    const calculateDiscount =()=> {
        setDiscountPrice((price * ( (100 - discount) / 100 )).toFixed(2))
    }

    const isClothes = category === "women's clothing" ||
    category === "men's clothing"

    const planetFriendly = isClothes &&
        <div className={classes.product__eco}>
            Planet Friendly
        </div>;

    return(
        <div className={classes.product}>
            <ul className={classes.breadCrumbs__list}>
                <li className={classes.breadCrumbs__item}>
                    <Link to={'/'} className={classes.breadCrumbs__link}>
                        <span className={classes.breadCrumbs__span}>
                            e-Shop
                        </span>
                    </Link>
                        <span className={classes.breadCrumbs__arrow}>{`>`}</span>
                </li>
                <li>
                    <HashLink 
                        to={`/#${categoryUrl}`} 
                        className={classes.breadCrumbs__link}
                    >
                        <span className={classes.breadCrumbs__span}>
                            {category}
                        </span>
                    </HashLink>
                        <span className={classes.breadCrumbs__arrow}>{`>`}</span>
                </li>
                <li>
                    <span className={`${classes.breadCrumbs__span} ${classes.active}`}>
                        {title}
                    </span>
                </li>
            </ul> 
            <div className={classes.product__main}>
                <div className={classes.product__imageBox} >
                    <img src={image} className={classes.product__image} alt='product'></img>
                </div>

                <div className={classes.product__details}>
                    <div className={classes.product__header}>
                        <div className={classes.product__title}>
                            {title}
                        </div>
                        <div className={classes.product__logo}>
                            <div className={classes.logo}>
                                <p className={classes.logo__title}>LOGO</p>
                                <p className={classes.logo__subtitle}>company</p>
                            </div>
                            
                        </div>
                    </div>
                        <div className={classes.product__discountBox}>
                            <div className={classes.product__discount}>{`-${discount}%`}</div>
                            { isClothes && <div className={classes.product__eco}>Planet Friendly</div> }
                        </div>
                        <div className={classes.product__priceBox}>
                            <div className={classes.product__priceSales}>{`${discountPrice} PLN`}</div>
                            <div className={classes.product__price}>{`${price} PLN`}</div>
                        </div>
                        { isClothes && <select ref={sizeSelectRef} className={classes.product__select}>
                            <option value="">Please choose your size</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select> }
                        <div className={classes.product__buttons}>
                            <button onClick={addToCart} className={classes.product__buttonAdd}>
                                Add to cart
                                <BsHandbag className={classes.product__buttonBag}/>
                            </button>
                            <button className={classes.product__buttonFavorite}>
                                <BsHeart className={classes.product__buttonHearth}/>
                            </button>
                        </div>
                        <InformationBox/>
                            <Accordion description={description}/> 
                </div>
            </div>
            <div className={classes.product__similar}>
                <p className={classes.similar__title}>Similar products</p>
                { fetchProducts && <ProductsSlider category={category} observer={false}/> }
            </div>
        </div>
    )
}
export default Product;