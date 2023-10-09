import { createSlice } from "@reduxjs/toolkit";
import fetchCurrencyDrop from '../slices/api/GetCurrencyApi'; // Import the async thunk for fetching currency data

// Create a Redux slice named "CurrencyDropDownSlice" for managing currency selection.
const CurrencyDropDownSlice = createSlice({
  name: 'currencyDrop',
  initialState: "usd", // Initialize the state with 'usd'
  reducers: {
    currencyDrop: ((state, action) => {
      // Update the state with the selected currency received from action.payload
      return action.payload;
    })
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyDrop.fulfilled, (state, action) => {
        // Update the state with the fetched currency data
        return action.payload; // Assuming action.payload contains the new currency data
      });
  },
});

export const { currencyDrop } = CurrencyDropDownSlice.actions; // Export the action creator

export default CurrencyDropDownSlice.reducer; // Export the reducer generated by the slice
