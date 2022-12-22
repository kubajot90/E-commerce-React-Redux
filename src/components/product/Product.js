import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Accordion from './Accordion';
import ProductsSlider from '../main/ProductsSlider';
import InformationBox from './InformationBox';
import Select from 'react-select';
import { BsHeart, BsHandbag } from 'react-icons/bs';
import classes from './Product.module.css';
import fetchProductsData from '../../store/productsSlice';
import { cartActions } from '../../store/cartSlice';

const options = [
    { value: "", label: "Chose your size" },
    { value: "S", label: "S" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" }
  ];

const Product =()=> {
    const [selectValue, setSelectValue] = useState('');
    const [productsAmount, setProductsAmount] = useState(null);
    const sizeSelectRef = useRef('');
    const fetchProducts = useSelector(state => state.products.data);
    const products = useSelector(state => state.cart.productsInCart);
    // const productsAmount2 = useSelector(state => state.cart.productsAmount);
    const dispatch = useDispatch();
  
    const location = useLocation();
    const currentProduct = location.state;

    const {image, title, price, description, category, id} = location.state;
    const categoryUrl = category.replace(/\s/g,'_');
    
    const [discount, setDiscount] = useState(Math.floor(Math.random() * 45));
    const [discountPrice, setDiscountPrice] = useState(0);
    const [buttonText, setButtonText] = useState('Add to cart');

    
    useEffect(()=>{
        window.scrollTo(0,0);
        dispatch(fetchProductsData());
        calculateDiscount();
        },[]);
    
    const addToCart =()=> {
        let product ={};

        if(!selectValue && isClothes) {
            sizeSelectRef.current.focus();
        } else if(isClothes) {
            product = {
                ...currentProduct, 
                size: selectValue.value,
                id : `${currentProduct.id}${selectValue.value}`,
                key: `${currentProduct.id}${selectValue.value}`,
            };
        } else if(!isClothes) {
            product = {
                ...currentProduct, 
                key: id
            };
        }
        dispatch(cartActions.addToCart(product));
    }

    const checkProductsAmount = () => {
        const size = isClothes ?  selectValue.value : null ;
        
        const isAdded = isClothes 
        ? products.filter(product =>
        `${currentProduct.id}${size}` === product.id && size === product.size)
        : products.filter(product => currentProduct.id === product.id);

        setProductsAmount(isAdded.length);

        const key = isClothes ? `${currentProduct.id}${size}` : currentProduct.id ;

        const amount = { [key] : isAdded.length };
        isAdded.length && dispatch(cartActions.setProductsAmount(amount));
    }

    const changeButtonName =()=> {
        if(productsAmount) {
            setButtonText('Already added to cart');
        } else {
            setButtonText('Add to cart');
        };
    }

    useEffect(()=>{
        checkProductsAmount();
        console.log('check prod amount useeffect');
        },[products, selectValue]);

    useEffect(()=>{
        changeButtonName();
        console.log('products amount useeffect');
        },[productsAmount]);

    // useEffect(()=>{
    //     console.log('productsAmount2 useeffect');
    //     },[productsAmount2]);
        
    const calculateDiscount =()=> {
        setDiscountPrice((price * ( (100 - discount) / 100 )).toFixed(2))
    }

    const isClothes = category === "women's clothing" ||
    category === "men's clothing"

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
                            {discount > 0 && 
                                <div className={classes.product__discount}>
                                    {`-${discount}%`}
                                </div>}
                            { isClothes && <div className={classes.product__eco}>Planet Friendly</div> }
                        </div>
                        <div className={classes.product__priceBox}>
                            {discount > 0 && <div className={classes.product__priceSales}>
                                {`${discountPrice} PLN`}
                            </div>}
                            <div
                                className={`${classes.product__price} ${discount < 1 ? classes.product__priceActive : '' }`}>
                                {`${price} PLN`}
                            </div>
                        </div>
                        { isClothes && 
                        <Select
                            ref={sizeSelectRef}
                            openMenuOnFocus={true}
                            placeholder={'chose your size'}
                            onChange={setSelectValue}
                            options={options}
                            className={classes.product__select}
                        />
                        }
                        <div className={classes.product__buttons}>
                            <button onClick={addToCart} className={classes.product__buttonAdd}>
                                {buttonText}
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