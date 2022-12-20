import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: { productsInCart: [], productsAmount: {} },
    reducers: {
        addToCart(state, action) {
            state.productsInCart = [...state.productsInCart, action.payload];
            // console.log('action id', action.payload.id);
            console.log('state', state.productsInCart);
        },

        removeFromCart(state, action) {
            // state.productsInCart.filter(action.payload)
        },

        setProductsAmount(state, action) {
            state.productsAmount = {...state.productsAmount, ...action.payload};
            console.log('state.productsAmount', state.productsAmount);
        }
    }
})
export const cartActions = cartSlice.actions;