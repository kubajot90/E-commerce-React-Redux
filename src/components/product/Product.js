import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import classes from './Product.module.css';

const Product =()=> {
    const location = useLocation();

    const {image, title, price, description, category} = location.state;

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
                    <Link to={`/${category}`} className={classes.breadCrumbs__link}>
                        <span className={classes.breadCrumbs__span} >
                            {`${category}`}
                        </span>
                    </Link>
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