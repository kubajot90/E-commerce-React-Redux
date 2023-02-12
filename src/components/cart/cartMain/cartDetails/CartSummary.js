import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cartSlice";
import classes from "./CartSummary.module.css";

const CartSummary = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart.productsInCart);
  const isWrapGift = useSelector((state) => state.cart.isWrapGift);

  const totalCartValue = useSelector((state) => state.cart.cartValue);

  const packingCost = 19.99;
  const deliveryCost = 9.99;

  useEffect(() => {
    dispatch(cartActions.updateCartValue());
  }, [productsInCart, isWrapGift]);

  return (
    <div>
      <h2 className={classes.summary__h2}>Summary</h2>
      <div className={classes.summary__wrapper}>
        <p className={classes.summary__title}>Products value:</p>
        <p className={classes.summary__amount}>
          {`${
            isWrapGift
              ? (totalCartValue - packingCost).toFixed(2)
              : totalCartValue.toFixed(2)
          } $`}
        </p>
      </div>
      {isWrapGift && (
        <div className={classes.summary__wrapper}>
          <p className={classes.summary__title}>Gift wrapping:</p>
          <p className={classes.summary__amount}>{`${packingCost} $`}</p>
        </div>
      )}
      <div className={classes.summary__wrapper}>
        <p className={classes.summary__title}>Discount value:</p>
        <p className={classes.summary__amount}>0.00 $</p>
      </div>
      <div className={classes.summary__wrapper}>
        <p className={classes.summary__title}>Cost of delivery:</p>
        <p className={classes.summary__amount}>{`${deliveryCost} $`}</p>
      </div>
      <div className={classes.summary__wrapper}>
        <p className={classes.summary__titleTotal}>Amount to pay:</p>
        <p className={classes.summary__amountTotal}>{`${(
          totalCartValue + deliveryCost
        ).toFixed(2)} $`}</p>
      </div>
      <button className={classes.summary__button}>Payment</button>
    </div>
  );
};

export default CartSummary;
