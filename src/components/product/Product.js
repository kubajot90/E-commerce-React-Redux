import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Accordion from './Accordion';
import classes from './Product.module.css';
import { BsHeart, BsTruck, BsSuitClub } from 'react-icons/bs';
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
                            <span>LOGO</span>
                            <span>company</span>
                        </div>
                    </div>
                        <div className={classes.product__priceBox}>
                            <span className={classes.product__discount}>-41%</span>
                            <span className={classes.product__eco}>Planet Friendly</span>
                        </div>
                        <select name="pets" id="pet-select">
                            <option value="">Please choose your size</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                        <div className={classes.product__buttons}>
                            <button className={classes.product__buttonAdd}>Add to cart</button>
                            <button className={classes.product__buttonFavorite}>
                                <BsHeart className={classes.product__buttonIcon}/>
                            </button>
                        </div>
                        <div className={classes.product__informations}>
                            <div className={classes.product__shipping}>
                                <BsTruck/>
                                <span>Free delivery and returns</span>  
                            </div>
                            <div className={classes.product__shipping}>
                                <AiOutlineFieldTime/>
                                <span>Shipping 24h</span>  
                            </div>
                            <div className={classes.product__shipping}>
                                <BsSuitClub/>
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