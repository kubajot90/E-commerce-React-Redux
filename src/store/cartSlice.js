import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productsInCart: [],
    productsAmount: {},
    favoritesProducts: [],
  },
  reducers: {
    addToCart(state, action) {
      state.productsInCart = [...state.productsInCart, action.payload];
    },

    addToFavorites(state, action) {
      state.favoritesProducts = [...state.favoritesProducts, action.payload];
    },

    removeFromFavorites(state, action) {
      state.favoritesProducts = current(state).favoritesProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },

    removeFromCart(state, action) {
      const item = action.payload;
      const itemIndex = current(state).productsInCart.indexOf(item);
      state.productsInCart.splice(itemIndex, 1);
    },

    setProductsAmount(state, action) {
      state.productsAmount = { ...state.productsAmount, ...action.payload };
    },
  },
});
export const cartActions = cartSlice.actions;
