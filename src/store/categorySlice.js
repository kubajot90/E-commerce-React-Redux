import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: 'category',
    initialState: { activeIndex: null },
    reducers: {
        toggleActive(state, action){
            state.activeIndex = action.payload;
        }
    }
})

export const categoryActions = categorySlice.actions;