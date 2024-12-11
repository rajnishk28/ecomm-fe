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
            // Check if the item already exists in the cart
            const existingItem = state.value.find(item => item._id === action.payload._id);
        
            if (existingItem) {
                // If the item exists, increment its quantity
                existingItem.quantity += action.payload.quantity || 1;
            } else {
                // If the item doesn't exist, add it to the cart with an initial quantity
                state.value.push({ ...action.payload, quantity: action.payload.quantity || 1 });
            }
        
            // Update the cart item count
            state.cartItemCount = state.value.reduce((total, item) => total + item.quantity, 0);
        },
        
        removeFromCart: (state, action) => {
            // Filter items based on the unique _id
            state.value = state.value.filter(item => item._id !== action.payload._id);
            state.cartItemCount = state.value.length; // Update the cart item count
        },
        
        
        
        
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
