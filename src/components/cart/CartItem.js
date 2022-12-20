import { useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import classes from './CartItem.module.css';

const CartItem =(props)=> {
    const [amount, setAmount] = useState(props.amount);
    const {title, image, price, size} = props.product

    const increaseAmount =()=> {
        setAmount(prev => prev + 1)
    }

    const decreaseAmount =()=> {
        setAmount(prev => {
           return prev > 1 ? prev - 1 : prev; 
    })
    }

    return(
        <div className={classes.cartItem}>
            <div className={classes.cartItem__imageContainer}>
                <img src={image} alt='product' className={classes.cartItem__image} />
            </div>
            <div className={classes.cartItem__detailsContainer}>
                <div className={classes.cartItem__header}>
                    <h2 className={classes.header__title}>
                        {title}
                    </h2>
                    <span className={classes.header__price}>
                        {price}
                    </span>
                </div>
                
                <div className={classes.cartItem__attribute}>
                    <p className={classes.attribute__p}>
                        Price
                    </p>
                    <span className={classes.attribute__value}>
                        {price}
                    </span>
                </div>
                <div className={classes.cartItem__attribute}>
                    <p className={classes.attribute__p}>
                        Size
                    </p>
                    <span className={classes.attribute__value}>
                        {size}
                    </span>
                </div>
                <div className={classes.cartItem__attribute}>
                    <p className={classes.attribute__p}>
                        Amount
                    </p>
                    <div className={classes.attribute__counter}>
                        <button onClick={increaseAmount} className={classes.attribute__button}>
                            +
                        </button>
                        <span>{amount}</span>
                        <button onClick={decreaseAmount} className={classes.attribute__button}>
                            -
                        </button>
                    </div>
                </div>
                <div className={classes.cartItem__options}>
                    <button className={classes.options__button}>
                        <GrClose className={classes.options__icon}/>
                        Delete
                    </button>
                    <button className={classes.options__button}>
                        <BsHeart className={classes.options__icon}/>
                        Add to Favorites
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CartItem;