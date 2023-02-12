import { createSlice, current } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoritesProducts: [],
  },
  reducers: {
    addToFavorites(state, action) {
      state.favoritesProducts = [...state.favoritesProducts, action.payload];
    },

    removeFromFavorites(state, action) {
      state.favoritesProducts = current(state).favoritesProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});
export const favoritesActions = favoritesSlice.actions;
