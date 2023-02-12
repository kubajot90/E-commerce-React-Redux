import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Accordion from "./accordion/Accordion";
import InformationBox from "./informationBox/InformationBox";
import BreadCrumbs from "./breadCrumbs/BreadCrumbs";
import SimilarProducts from "./SimilarProducts";
import ProductButtons from "./ProductButtons";
import Select from "react-select";
import classes from "./Product.module.css";
import fetchProductsData from "../../store/productsSlice";
import { cartActions } from "../../store/cartSlice";
import useFavorites from "../../hooks/useFavorites";

const options = [
  { value: "", label: "Chose your size" },
  { value: "S", label: "S" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const Product = () => {
  const [selectValue, setSelectValue] = useState("");
  const [productsAmount, setProductsAmount] = useState(null);
  const sizeSelectRef = useRef("");

  const products = useSelector((state) => state.cart.productsInCart);
  const dispatch = useDispatch();

  const location = useLocation();
  const currentProduct = location.state;

  const { image, title, price, description, category, id } = location.state;

  const favoritesProducts = useSelector(
    (state) => state.cart.favoritesProducts
  );
  const favorites = useFavorites(currentProduct);
  // const [isFavorites, setIsFavorites] = useState(null);

  const isClothes =
    category === "women's clothing" || category === "men's clothing";

  const [discount, setDiscount] = useState(Math.floor(Math.random() * 45));
  const [discountPrice, setDiscountPrice] = useState(0);
  const [buttonText, setButtonText] = useState("Add to cart");

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProductsData());
    calculateDiscount();
    favorites.checkIsFavorites(currentProduct);
  }, []);

  const addToCart = () => {
    let product = {};

    if (!selectValue && isClothes) {
      sizeSelectRef.current.focus();
      return;
    }
    if (isClothes && selectValue) {
      product = {
        ...currentProduct,
        size: selectValue.value,
        id: `${currentProduct.id}${selectValue.value}`,
        key: `${currentProduct.id}${selectValue.value}`,
      };
    }
    if (!isClothes) {
      product = {
        ...currentProduct,
        key: id,
      };
    }
    dispatch(cartActions.addToCart(product));
  };

  // const toggleFavorites = () => {
  //   !isFavorites
  //     ? dispatch(cartActions.addToFavorites(currentProduct))
  //     : dispatch(cartActions.removeFromFavorites(currentProduct));

  //   setIsFavorites((prev) => (prev = !prev));
  // };

  // const checkIsFavorites = (product) => {
  //   const isAdd = Boolean(
  //     favoritesProducts.filter((item) => item.id === product.id).length
  //   );

  //   setIsFavorites(isAdd);
  // };

  const checkProductsAmount = () => {
    const size = isClothes ? selectValue.value : null;

    const isAdded = isClothes
      ? products.filter(
          (product) =>
            `${currentProduct.id}${size}` === product.id &&
            size === product.size
        )
      : products.filter((product) => currentProduct.id === product.id);

    setProductsAmount(isAdded.length);

    const key = isClothes ? `${currentProduct.id}${size}` : currentProduct.id;

    const amount = { [key]: isAdded.length };
    isAdded.length && dispatch(cartActions.setProductsAmount(amount));
  };

  const changeButtonName = () => {
    if (productsAmount) {
      setButtonText("Already added to cart");
    } else {
      setButtonText("Add to cart");
    }
  };

  useEffect(() => {
    checkProductsAmount();
  }, [products, selectValue]);

  useEffect(() => {
    changeButtonName();
  }, [productsAmount]);

  const calculateDiscount = () => {
    setDiscountPrice((price * ((100 - discount) / 100)).toFixed(2));
  };

  return (
    <div className={classes.product}>
      <BreadCrumbs />
      <div className={classes.product__main}>
        <div className={classes.product__imageBox}>
          <img
            src={image}
            className={classes.product__image}
            alt="product"
          ></img>
        </div>

        <div className={classes.product__details}>
          <div className={classes.product__header}>
            <div className={classes.product__title}>{title}</div>
            <div className={classes.product__logo}>
              <div className={classes.logo}>
                <p className={classes.logo__title}>LOGO</p>
                <p className={classes.logo__subtitle}>company</p>
              </div>
            </div>
          </div>
          <div className={classes.product__discountBox}>
            {discount > 0 && (
              <div className={classes.product__discount}>{`-${discount}%`}</div>
            )}
            {isClothes && (
              <div className={classes.product__eco}>Planet Friendly</div>
            )}
          </div>
          <div className={classes.product__priceBox}>
            {discount > 0 && (
              <div className={classes.product__priceSales}>
                {`${discountPrice} $`}
              </div>
            )}
            <div
              className={`${classes.product__price} ${
                discount < 1 ? classes.product__priceActive : ""
              }`}
            >
              {`${price} $`}
            </div>
          </div>
          {isClothes && (
            <Select
              ref={sizeSelectRef}
              openMenuOnFocus={true}
              placeholder={"chose your size"}
              onChange={setSelectValue}
              options={options}
              className={classes.product__select}
            />
          )}
          <ProductButtons
            addToCart={addToCart}
            buttonText={buttonText}
            toggleFavorites={favorites.toggleFavorites}
            isFavorites={favorites.isFavorites}
          />
          <InformationBox />
          <Accordion description={description} />
        </div>
      </div>
      <SimilarProducts />
    </div>
  );
};
export default Product;
