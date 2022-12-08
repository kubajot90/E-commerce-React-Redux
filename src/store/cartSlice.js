import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: { productsInCart: [] },
    reducers: {
        addToCart(state, action){
            state.productsInCart = [...state.productsInCart, action.payload];
            // console.log('action id', action.payload.id);
            console.log('state', state.productsInCart);
        },

        removeFromCart(state, action){
            // state.productsInCart.filter(action.payload)
        }
    }
})
export const cartActions = cartSlice.actions;