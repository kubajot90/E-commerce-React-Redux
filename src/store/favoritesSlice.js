import { createSlice, current } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoritesProductsId: [],
  },
  reducers: {
    addToFavorites(state, action) {
      const productId = action.payload.id;

      if (state.favoritesProductsId.indexOf(productId) < 0) {
        state.favoritesProductsId = [...state.favoritesProductsId, productId];
      }
    },

    removeFromFavorites(state, action) {
      const productId = action.payload.id;

      state.favoritesProductsId = current(state).favoritesProductsId.filter(
        (id) => id !== productId
      );
    },
  },
});
export const favoritesActions = favoritesSlice.actions;
