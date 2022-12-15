import { useSelector } from 'react-redux';

import CartItem from './CartItem';
import classes from './Cart.module.css';


const Cart =()=> {
    const productsInCart = useSelector(state => state.cart.productsInCart);

    // const withoutDuplicates =()=> {
        // let productsWithoutDuplicates = [];
        // console.log('productsInCart', productsInCart);
        // productsInCart.forEach((product, index)=>{
        //     const duplicates = productsInCart.filter(item => item === product);
        //     console.log('duplicates', duplicates);
        //     if(duplicates.length > 1) {
        //         productsInCart[index].amount = duplicates.length;

                // productsWithoutDuplicates = productsInCart.filter((product) => product !== duplicates[0]) 
        //     }
        //     console.log('productsWithoutDuplicates:     ', productsWithoutDuplicates);
            
        // })
        // return productsWithoutDuplicates;
    //     let productsWithoutDuplicates = [...productsInCart];

    //     productsWithoutDuplicates[0].amount = 222

    //     return productsWithoutDuplicates.map((product)=> <CartItem product={product} key={product.id}/>)
    // }

    return(
        <div className={classes.cart}>
            <div className={classes.cart__main}>
                <div className={classes.cart__header}>
                    <h1 className={classes.header__title}>Cart</h1>
                    <span className={classes.header__amount}>2</span>
                </div>
                <ul className={classes.cart__list}>
                    {productsInCart.map((product)=> 
                        <CartItem product={product} key={product.id}/>
                        )}
                </ul>
            </div>
            <div className={classes.cart__details}>

            </div>
        </div>
    )
}
export default Cart;