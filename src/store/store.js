import { configureStore } from '@reduxjs/toolkit';
import { categorySlice } from './categorySlice';
import { productsSlice } from './productsSlice';

        const store =  configureStore({
                reducer: {
                    products: productsSlice.reducer,
                    category: categorySlice.reducer
                }
        });

        export default store;
        