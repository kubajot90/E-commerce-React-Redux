import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cartSlice";
import classes from "./CartSummary.module.css";

const CartSummary = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart.productsInCart);
  const isWrapGift = useSelector((state) => state.cart.isWrapGift);

  const totalCartValue = useSelector((state) => state.cart.cartValue);

  useEffect(() => {
    dispatch(cartActions.updateCartValue());
  }, [productsInCart]);

  return (
    <div>
      <h2 className={classes.summary__h2}>Summary</h2>
      <div className={classes.summary__wrapper}>
        <p className={classes.summary__title}>Products value:</p>
        <p className={classes.summary__amount}>{`${totalCartValue} $`}</p>
      </div>
      <div className={classes.summary__wrapper}>
        <p className={classes.summary__title}>Gift wrapping:</p>
        <p className={classes.summary__amount}>222$</p>
      </div>
      <div className={classes.summary__wrapper}>
        <p className={classes.summary__title}>Discount value:</p>
        <p className={classes.summary__amount}>222$</p>
      </div>
      <div className={classes.summary__wrapper}>
        <p className={classes.summary__title}>Cost of delivery:</p>
        <p className={classes.summary__amount}>222$</p>
      </div>
      <div className={classes.summary__wrapper}>
        <p className={classes.summary__titleTotal}>Amount to pay:</p>
        <p className={classes.summary__amountTotal}>999</p>
      </div>
      <button className={classes.summary__button}>Payment</button>
    </div>
  );
};

export default CartSummary;
