import CartSummary from "./CartSummary";
import InformationBox from "../../../product/informationBox/InformationBox";
import classes from "./CartDetails.module.css";

const CartDetails = () => {
  return (
    <div className={classes.cart__details}>
      <CartSummary />
      <InformationBox bgColor={"#f4f4f4"} padding={"5px 20px"} />
    </div>
  );
};

export default CartDetails;
