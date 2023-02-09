import { BsHeart, BsHandbag } from "react-icons/bs";

import classes from "./ProductButtons.module.css";

const ProductButtons = ({
  addToCart,
  buttonText,
  toggleFavorites,
  isFavorites,
}) => {
  return (
    <div className={classes.product__buttons}>
      <button onClick={addToCart} className={classes.product__buttonAdd}>
        {buttonText}
        <BsHandbag className={classes.product__buttonBag} />
      </button>
      <button
        onClick={toggleFavorites}
        className={`${classes.product__buttonFavorite} ${
          isFavorites ? classes.product__buttonFavorite_active : ""
        }`}
      >
        <BsHeart
          className={`${classes.product__buttonHearth} ${
            isFavorites ? classes.product__buttonHearth_active : ""
          }`}
        />
      </button>
    </div>
  );
};

export default ProductButtons;
