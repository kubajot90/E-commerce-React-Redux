import CartMain from "./cartMain/CartMain";
import classes from "./Cart.module.css";
import CartDetails from "./cartMain/cartDetails/CartDetails";

const Cart = () => {
  return (
    <div className={classes.cart}>
      <CartMain />
      <CartDetails />
    </div>
  );
};
export default Cart;
