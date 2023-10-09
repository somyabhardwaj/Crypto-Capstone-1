// Import the createSlice function from the Redux Toolkit library
import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice named ChartCoinSlice
const ChartCoinSlice = createSlice({
    // Define the name of the slice
    name: 'coin',
    // Set the initial state to "bitcoin"
    initialState: "bitcoin",
    // Define Redux actions and their corresponding reducer functions
    reducers: {
        // Action to set the selected coin
        setCoin: (state, action) => {
            // Update the state with the new coin value
            return action.payload;
        }
    }
});

// Export the setCoin action from the ChartCoinSlice slice
export const { setCoin } = ChartCoinSlice.actions;

// Export the reducer function from the ChartCoinSlice slice
export default ChartCoinSlice.reducer;
