import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: { productsInCart: [], productsAmount: {} },
    reducers: {
        addToCart(state, action) {
            state.productsInCart = [...state.productsInCart, action.payload];
            // console.log('action id', action.payload.id);
            console.log('state addtocart', state.productsInCart);
        },

        removeFromCart(state, action) {
            // state.productsInCart.filter(action.payload)
        },

        increaseAmount(state, action) {
            // state.productsAmount = 112;
            // console.log('dziala');
        },

        decreaseAmount(state, action) {
            console.log('state.productsInCart1', current(state).productsInCart);

            const item = action.payload;

            const itemIndex = state.productsInCart.indexOf(item);
            state.productsInCart.splice(itemIndex);
            
            console.log('state.productsInCart2', current(state).productsInCart);
        },

        setProductsAmount(state, action) {
            state.productsAmount = {...state.productsAmount, ...action.payload};
            console.log('state.productsAmount', state.productsAmount);
        }
    }
})
export const cartActions = cartSlice.actions;