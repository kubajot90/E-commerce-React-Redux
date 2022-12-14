import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: { productsInCart: [], productsAmount: {}, favoritesProducts: [] },
    reducers: {
        addToCart(state, action) {
            state.productsInCart = [...state.productsInCart, action.payload];

            console.log('cart slice - state.productsInCart', state.productsInCart);
        },

        addToFavorites(state, action) {
            state.favoritesProducts = [...state.favoritesProducts, action.payload];
        },

        removeFromFavorites(state, action) {
            state.favoritesProducts = current(state).favoritesProducts.filter(product => product.id !== action.payload.id);
        },

        // checkIsFavorites(state, action) {
       
        // },

        // removeFromCart(state, action) {
            // state.productsInCart.filter(action.payload)
        // },

        // increaseAmount(state, action) {
            // state.productsAmount = {...state.productsAmount, 'xxx':12};
             
        // },

        removeFromCart(state, action) {
            const item = action.payload;
            const itemIndex = current(state).productsInCart.indexOf(item);
            state.productsInCart.splice(itemIndex,1);

              console.log('cart slice - state.productsInCart', current(state).productsInCart);
        },

        setProductsAmount(state, action) {
            state.productsAmount = {...state.productsAmount, ...action.payload};
        }
    }
})
export const cartActions = cartSlice.actions;