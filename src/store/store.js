import { configureStore } from '@reduxjs/toolkit';
import { categorySlice } from './categorySlice';
import { productsSlice } from './productsSlice';
import { cartSlice } from './cartSlice';

        const store =  configureStore({
                reducer: {
                    products: productsSlice.reducer,
                    category: categorySlice.reducer,
                    cart: cartSlice.reducer,
                }
        });

        export default store;
        