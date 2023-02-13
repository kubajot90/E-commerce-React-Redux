import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { favoritesActions } from "../store/favoritesSlice";

const useFavorites = (currentProduct) => {
  const [isFavorites, setIsFavorites] = useState(false);
  const dispatch = useDispatch();
  const favoritesProductsId = useSelector(
    (state) => state.favorites.favoritesProductsId
  );

  const toggleFavorites = () => {
    !isFavorites
      ? dispatch(favoritesActions.addToFavorites(currentProduct))
      : dispatch(favoritesActions.removeFromFavorites(currentProduct));

    setIsFavorites((prev) => (prev = !prev));
  };

  const checkIsFavorites = (product) => {
    // const productId = +product.id.toString().slice(0, 2);
    const isAdd = Boolean(
      favoritesProductsId.filter((id) => id === product.id).length
    );

    setIsFavorites(isAdd);
  };

  useEffect(() => {
    checkIsFavorites(currentProduct);
  }, [favoritesProductsId]);

  return { toggleFavorites, checkIsFavorites, isFavorites };
};
export default useFavorites;
