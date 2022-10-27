import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {},
    reducers: {
        fetchProducts(state, actions){
          state.data =  actions.payload;
        }
    }
})

export const fetchProductsData = () => {
    return async (dispatch) => {
      const fetchData = async () => {
        const response = await fetch(
          'https://fakestoreapi.com/products'
        );
  
        if (!response.ok) {
          throw new Error('Could not fetch data!');
        }
  
        const data = await response.json();
  
        return data;
      };
  
      try {
        const productsData = await fetchData();
        dispatch(productsActions.fetchProducts(productsData));
      } catch (error) {
        console.log(error);
      }
    };
  };

export const productsActions = productsSlice.actions;
export default fetchProductsData