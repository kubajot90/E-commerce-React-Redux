import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/cartSlice";
import { BsHeart } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import useFavorites from "../../../hooks/useFavorites";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, image, price, size, id, sizeId } = props.product;
  const cart = useSelector((state) => state.cart);
  const [productAmount, setProductAmount] = useState(
    cart.productsAmount[sizeId] || cart.productsAmount[id]
  );
  const favorites = useFavorites(props.product);

  const totalPrice = parseFloat((price * productAmount).toFixed(2));

  const addToCart = () => {
    const amount = { [sizeId || id]: productAmount + 1 };
    dispatch(cartActions.setProductsAmount(amount));

    setProductAmount((prev) => prev + 1);
    dispatch(cartActions.addToCart(props.product));
  };

  const removeFromCart = () => {
    dispatch(cartActions.removeFromCart(props.product));
    const amount = { [sizeId || id]: productAmount - 1 };

    dispatch(cartActions.setProductsAmount(amount));
    setProductAmount((prev) => prev - 1);
  };

  const removeAll = () => {
    dispatch(cartActions.removeAll(sizeId));
    const amount = { [sizeId || id]: 0 };
    dispatch(cartActions.setProductsAmount(amount));
    setProductAmount(0);
  };

  return (
    <div className={classes.cartItem}>
      <div className={classes.cartItem__imageContainer}>
        <img src={image} alt="product" className={classes.cartItem__image} />
      </div>
      <div className={classes.cartItem__detailsContainer}>
        <div className={classes.cartItem__header}>
          <p className={classes.header__title}>{title}</p>
          <span className={classes.header__price}>{`${totalPrice} $`}</span>
        </div>

        <div className={classes.cartItem__attribute}>
          <p className={classes.attribute__p}>Price</p>
          <span className={classes.attribute__value}>{price}</span>
        </div>
        {size && (
          <div className={classes.cartItem__attribute}>
            <p className={classes.attribute__p}>Size</p>
            <span className={classes.attribute__value}>{size}</span>
          </div>
        )}
        <div className={classes.cartItem__attribute}>
          <p className={classes.attribute__p}>Amount</p>
          <div className={classes.attribute__counter}>
            <button onClick={addToCart} className={classes.attribute__button}>
              +
            </button>
            <span className={classes.attribute__span}>{productAmount}</span>
            <button
              onClick={removeFromCart}
              className={classes.attribute__button}
            >
              -
            </button>
          </div>
        </div>
        <div className={classes.cartItem__options}>
          <button onClick={removeAll} className={classes.options__button}>
            <GrClose className={classes.options__icon} />
            Delete
          </button>
          <button
            onClick={favorites.toggleFavorites}
            className={`${classes.options__button} ${
              favorites.isFavorites ? classes.options__buttonActive : ""
            }`}
          >
            <BsHeart
              className={`${classes.options__icon} ${
                favorites.isFavorites ? classes.options__iconActive : ""
              }`}
            />
            Add to favorites
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
