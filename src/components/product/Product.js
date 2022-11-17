import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Accordion from './Accordion';
import classes from './Product.module.css';
import { BsHeart, BsTruck, BsSuitClub, BsHandbag } from 'react-icons/bs';
import { AiOutlineFieldTime } from 'react-icons/ai';


const Product =()=> {
    const location = useLocation();

    const {image, title, price, description} = location.state;
    const category = location.state.category.replace(/\s/g,'_');

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
                    <HashLink to={`/#${category}`} className={classes.breadCrumbs__link}>
                        <span className={classes.breadCrumbs__span} >
                            {location.state.category}
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
                            <div className={classes.product__discount}>-41%</div>
                            <div className={classes.product__eco}>Planet Friendly</div>
                        </div>
                        <div className={classes.product__priceBox}>
                            <div className={classes.product__priceSales}>499.99 PLN</div>
                            <div className={classes.product__price}>{price} PLN</div>
                        </div>
                        <select className={classes.product__select}>
                            <option value="">Please choose your size</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                        <div className={classes.product__buttons}>
                            <button className={classes.product__buttonAdd}>
                                Add to cart
                                <BsHandbag className={classes.product__buttonBag}/>
                            </button>
                            <button className={classes.product__buttonFavorite}>
                                <BsHeart className={classes.product__buttonHearth}/>
                            </button>
                        </div>
                        <div className={classes.product__informationsBox}>
                            <div className={classes.product__information}>
                                <BsTruck className={classes.product__informationIcon}/>
                                <span>Free delivery and returns</span>  
                            </div>
                            <div className={classes.product__information}>
                                <AiOutlineFieldTime className={classes.product__informationIcon}/>
                                <span>Shipping 24h</span>  
                            </div>
                            <div className={classes.product__information}>
                                <BsSuitClub className={classes.product__informationIcon}/>
                                <span>Save with E-shop Club</span>  
                            </div>
                            <Accordion/>  
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Product;