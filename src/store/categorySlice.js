import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: 'category',
    initialState: { activeHash: null },
    reducers: {
        toggleActiveHash(state, action){
            state.activeHash = action.payload;
        }
    }
})

export const categoryActions = categorySlice.actions;