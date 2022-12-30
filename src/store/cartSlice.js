import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: { productsInCart: [], productsAmount: {'zzz':323} },
    reducers: {
        addToCart(state, action) {
            state.productsInCart = [...state.productsInCart, action.payload];
            // console.log('state addtocart', state.productsInCart);
        },

        removeFromCart(state, action) {
            // state.productsInCart.filter(action.payload)
        },

        increaseAmount(state, action) {
            // return {...state.productsAmount, 'xxx':12}
            
            // state.productsAmount = {...state.productsAmount, 'xxx':12};
            // console.log('dzial increaseAmount');
           return { productsInCart: state.productsInCart, productsAmount: {...state.productsAmount, 'nowe': 999} } ;
           
            // console.log('state', current(state));
             
        },

        decreaseAmount(state, action) {
            // console.log('state.productsInCart1', current(state).productsInCart);

            const item = action.payload;

            const itemIndex = state.productsInCart.indexOf(item);

            let already = false;

            state.productsInCart = state.productsInCart.filter((item, position) => {
                if (!already && itemIndex !== position) {
                  already = true
                  return false
                } else return true
              });

            // const cartCopy = [...state.productsInCart];
            // cartCopy.splice(itemIndex);
            // state.productsInCart = cartCopy;
            
            // console.log('state.productsInCart', state.productsInCart);
            
            // console.log('state.productsInCart2', current(state).productsInCart);
        },

        setProductsAmount(state, action) {
        //    return  { productsInCart : state.productsInCart,
        //     productsAmount : {...state.productsAmount, ...action.payload}
        // }
            state.productsAmount = {...state.productsAmount, ...action.payload};

            console.log('state.productsAmount', state.productsAmount);
        }
    }
})
export const cartActions = cartSlice.actions;