import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart =()=> {
    const productsInCart = useSelector(state => state.cart.productsInCart);

    const noDuplicates =()=> {
        const productsToRender = [];
        const updateProductsInCart = [...productsInCart]

        updateProductsInCart.forEach((product) => {
            const duplicates = updateProductsInCart.filter(item => item.key === product.key);

            const productsAmount = duplicates.length;
            const removeDuplicates = duplicates.slice(1).forEach(item => {
                const index = updateProductsInCart.indexOf(item);
                updateProductsInCart.splice(index,1);
            })

            // const products = updateProductsInCart.filter(item => item.key === product.key);

            // console.log('updateProductsInCart[0]', updateProductsInCart[0]);
            // updateProductsInCart[0] = {...updateProductsInCart[0], smthNew: 'XXX'};
            // updateProductsInCart[0] = {...updateProductsInCart[0], title: 'XXX'};
            // console.log('updateProductsInCart[0] NEW', updateProductsInCart[0]);

            // const updateProduct = {...product, amount: duplicates.length}
            
            // if(products.length > 1) {
            //     const duplicates = products.slice(1);
                // const duplicates = products.sort((a,b)=>b.amount - a.amount).slice(1);
                
                
                // updateProductsInCart.push(updateProduct)
            // }

            productsToRender.push(< CartItem product={product} amount={productsAmount} key={product.key} />)
        })
        return productsToRender;
    };

    return(
        <div className={classes.cart}>
            <div className={classes.cart__main}>
                <div className={classes.cart__header}>
                    <h1 className={classes.header__title}>Cart</h1>
                    <span className={classes.header__amount}>2</span>
                </div>
                <ul className={classes.cart__list}>
                    {/* {noDuplicates().map((product)=> 
                        <CartItem product={product} key={product.key}/>
                        )} */}
                        {noDuplicates().map(product => product)}
                </ul>
            </div>
            <div className={classes.cart__details}>

            </div>
        </div>
    )
}
export default Cart;