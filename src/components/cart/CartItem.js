import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import { BsHeart } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import classes from './CartItem.module.css';

const CartItem =(props)=> {
    const dispatch = useDispatch();
    const {title, image, price, size, id} = props.product
    // const productAmount = useSelector(state => state.cart.productsAmount[id]);
    const cart = useSelector(state => state.cart);
    const [productAmount, setProductAmount] = useState(cart.productsAmount[id])
    // const amount = productsAmount[id] ;
    // const amount = size ? productsAmount[id] : productsAmount[id] ;

    const increaseAmount =()=> {
        // setAmount(prev => prev + 1)
        dispatch(cartActions.increaseAmount());
    }
    
    const decreaseAmount =()=> {
        // setAmount(prev => prev > 1 ? prev - 1 : prev )
        dispatch(cartActions.decreaseAmount(props.product));

        // const key = size ? `${id}${size}` : id ;
        const key = id ;

        const amount = { [key] : productAmount - 1 };
        dispatch(cartActions.setProductsAmount(amount));
        setProductAmount(prev => prev - 1 );
       
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
                        <span>{productAmount}</span>
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