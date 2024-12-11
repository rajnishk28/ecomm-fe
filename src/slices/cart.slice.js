import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [], // Represents the cart as an array of items
    cartItemCount: 0, // Tracks the total number of items in the cart
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Add an item to the cart
            state.value.push(action.payload);
            // Update the cart item count
            state.cartItemCount = state.value.length;
        },
        removeFromCart: (state, action) => {
            // Remove an item from the cart based on a condition
            state.value = state.value.filter(item => item.id !== action.payload.id);
            // Update the cart item count
            state.cartItemCount = state.value.length;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
