import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import classes from './Product.module.css';

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
        </div>
    )
}
export default Product;