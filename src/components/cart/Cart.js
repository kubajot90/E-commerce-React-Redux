import { useSelector } from "react-redux";
import CartMain from "./cartMain/CartMain";
import CartDetails from "./cartMain/cartDetails/CartDetails";
import Modal from "../modal/Modal";
import classes from "./Cart.module.css";

const Cart = () => {
  const isCartEmpty = !useSelector((state) =>
    Boolean(state.cart.productsInCart.length)
  );

  return (
    <div className={classes.cart}>
      {isCartEmpty && (
        <Modal
          title={"Your cart is empty"}
          subtitle={"Choose something for yourself from our current offer"}
        />
      )}
      {!isCartEmpty && <CartMain />}
      {!isCartEmpty && <CartDetails />}
    </div>
  );
};
export default Cart;
