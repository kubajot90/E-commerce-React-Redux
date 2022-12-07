import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState: { productsInCart: [] },
    reducers: {
        addToCart(state, action){
            console.log('state', state.products);
            // console.log('actions', action.payload);
        //   state.data =  actions.payload;
            state.productsInCart = [...state.productsInCart, action.payload];
            // console.log('products', products);
            // state.counter= state.counter + action.payload;
            console.log('action id', action.payload.id);
        },

        removeFromCart(state, action){
            // state.productsInCart.filter(action.payload)
        }
    }
})
export const cartActions = cartSlice.actions;