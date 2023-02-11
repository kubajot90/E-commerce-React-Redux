import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../../../store/cartSlice";
import { BsGift } from "react-icons/bs";
import { TbDiscount } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { MdCardGiftcard } from "react-icons/md";
import classes from "./CartDetailsCards.module.css";

function CartDetailsCards() {
  const isCheckBoxMark = useSelector((state) => state.cart.isWrapGift);
  const dispatch = useDispatch();

  const [openForm, setOpenForm] = useState(false);

  const packingCost = 19.99;

  const toggleCheckbox = () => {
    dispatch(cartActions.toggleIsWrapGift());
  };

  const showForm = () => {
    setOpenForm((prev) => (prev = !prev));
  };

  return (
    <>
      <div className={classes.cartCard}>
        <BsGift className={classes.cartCard__icon} />
        <p className={classes.cartCard__text}>Wrap for a gift</p>
        <p className={classes.cartCard__cost}>{`${packingCost} $`}</p>
        <span onClick={toggleCheckbox} className={classes.cartCard__checkbox}>
          {isCheckBoxMark && (
            <span className={classes.cartCard__checkboxFill}></span>
          )}
        </span>
      </div>
      <div className={classes.cartCard}>
        <div className={classes.cartCard__wrapper}>
          <TbDiscount className={classes.cartCard__icon} />
          <p className={classes.cartCard__text}>Discount coupon</p>
          <button
            onClick={showForm}
            className={`${classes.cartCard__arrowButton} ${
              openForm ? classes.arrowButton_active : ""
            }`}
          >
            <IoIosArrowDown />
          </button>
        </div>
        {openForm && (
          <form className={classes.cartCard__form}>
            <input
              type="text"
              id="discount"
              placeholder="Discount code"
              className={classes.cartCard__input}
            ></input>
            <button type="submit" className={classes.cartCard__button}>
              Use
            </button>
          </form>
        )}
      </div>
      <div className={classes.cartCard}>
        <MdCardGiftcard className={classes.cartCard__icon} />
        <div>
          <h3>Do you have a gift card?</h3>
          <p className={classes.cartCard__text}>
            You will use it at the payment stage.
          </p>
        </div>
      </div>
    </>
  );
}

export default CartDetailsCards;
