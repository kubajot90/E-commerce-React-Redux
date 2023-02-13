import { useSelector } from "react-redux";
import CartItem from "../cartItem/CartItem";
import classes from "./CartMain.module.css";

const CartMain = () => {
  const productsInCart = useSelector((state) => state.cart.productsInCart);
  const productsInCartAmount = productsInCart.length;

  const noDuplicates = () => {
    const productsToRender = [];
    const updateProductsInCart = [...productsInCart];

    updateProductsInCart.forEach((product) => {
      const duplicates = updateProductsInCart.filter(
        (item) => item.sizeId === product.sizeId
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
    <div className={classes.cart__main}>
      <div className={classes.cart__header}>
        <h1 className={classes.header__title}>Cart</h1>
        <span className={classes.header__amount}>{productsInCartAmount}</span>
      </div>
      <ul className={classes.cart__list}>
        {noDuplicates().map((product) => product)}
      </ul>
    </div>
  );
};

export default CartMain;
