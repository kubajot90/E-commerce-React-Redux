import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { favoritesActions } from "../store/favoritesSlice";

const useFavorites = (currentProduct) => {
  const [isFavorites, setIsFavorites] = useState(false);
  const dispatch = useDispatch();
  const favoritesProducts = useSelector(
    (state) => state.favorites.favoritesProducts
  );

  const toggleFavorites = () => {
    !isFavorites
      ? dispatch(favoritesActions.addToFavorites(currentProduct))
      : dispatch(favoritesActions.removeFromFavorites(currentProduct));

    setIsFavorites((prev) => (prev = !prev));
  };

  const checkIsFavorites = (product) => {
    const isAdd = Boolean(
      favoritesProducts.filter((favProduct) => favProduct.id === product.id)
        .length
    );

    setIsFavorites(isAdd);
  };

  useEffect(() => {
    checkIsFavorites(currentProduct);
  }, [favoritesProducts]);

  return { toggleFavorites, checkIsFavorites, isFavorites };
};
export default useFavorites;
