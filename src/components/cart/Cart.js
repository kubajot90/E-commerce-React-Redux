import { useSelector } from 'react-redux';

import CartItem from './CartItem';
import classes from './Cart.module.css';


const Cart =()=> {
    const productsInCart = useSelector(state => state.cart.productsInCart);

    return(
        <div className={classes.cart}>
            <div className={classes.cart__main}>
                <div className={classes.cart__header}>
                    <h1 className={classes.header__title}>Cart</h1>
                    <span className={classes.header__amount}>2</span>
                </div>
                {/* <CartItem/> */}
                <ul className={classes.cart__list}>
                    {productsInCart.map((product)=> <CartItem product={product} key={product.id}/>)}
                </ul>
            </div>
            <div className={classes.cart__details}>

            </div>
        </div>
    )
}
export default Cart;