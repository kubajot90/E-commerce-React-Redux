import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = () => {
  const productsInCart = useSelector((state) => state.cart.productsInCart);

  const noDuplicates = () => {
    const productsToRender = [];
    const updateProductsInCart = [...productsInCart];

    updateProductsInCart.forEach((product) => {
      const duplicates = updateProductsInCart.filter(
        (item) => item.id === product.id
      );

      const productsAmount = duplicates.length;
      const removeDuplicates = duplicates.slice(1).forEach((item) => {
        const index = updateProductsInCart.indexOf(item);
        updateProductsInCart.splice(index, 1);
      });

      productsToRender.push(
        <CartItem
          product={product}
          amount={productsAmount}
          key={`${product.key}${productsAmount}`}
        />
      );
    });
    return productsToRender;
  };

  return (
    <div className={classes.cart}>
      <div className={classes.cart__main}>
        <div className={classes.cart__header}>
          <h1 className={classes.header__title}>Cart</h1>
          <span className={classes.header__amount}>2</span>
        </div>
        <ul className={classes.cart__list}>
          {noDuplicates().map((product) => product)}
        </ul>
      </div>
      <div className={classes.cart__details}></div>
    </div>
  );
};
export default Cart;
