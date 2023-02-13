import { createSlice, current } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoritesProducts: [],
  },
  reducers: {
    addToFavorites(state, action) {
      const productId = action.payload.id;
      const product = action.payload;

      if (state.favoritesProducts.indexOf(productId) < 0) {
        state.favoritesProducts = [...state.favoritesProducts, product];
      }
      console.log("fav prod:", current(state).favoritesProducts);
    },

    removeFromFavorites(state, action) {
      const productId = action.payload.id;

      state.favoritesProducts = current(state).favoritesProducts.filter(
        (product) => product.id !== productId
      );
    },
  },
});
export const favoritesActions = favoritesSlice.actions;
