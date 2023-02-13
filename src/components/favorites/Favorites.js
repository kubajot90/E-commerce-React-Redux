import { useSelector } from "react-redux";
import ProductCard from "../main/productsSlider/ProductCard";
import Modal from "../modal/Modal";
import classes from "./Favorites.module.css";

const Favorites = () => {
  const favoritesProducts = useSelector(
    (state) => state.favorites.favoritesProducts
  );
  const isFavoritesEmpty = !useSelector((state) =>
    Boolean(state.favorites.favoritesProducts.length)
  );

  return (
    <div className={classes.favorites}>
      {isFavoritesEmpty && (
        <Modal
          title={"No favorite products"}
          subtitle={"Choose something for yourself from our current offer"}
        />
      )}

      {!isFavoritesEmpty && (
        <div className={classes.favorites__wrapper}>
          <h1 className={classes.favorites__title}>Favorites</h1>
          <ul className={classes.favorites__list}>
            {favoritesProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Favorites;
