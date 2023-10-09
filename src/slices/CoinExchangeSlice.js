import { createSlice } from "@reduxjs/toolkit";
import fetchExchangeRates from "./api/ExchangeRatesApi";

const CoinExchangeSlice = createSlice({
  name: "ExchangeRates",
  initialState: {
    rates: {}, // Initialize rates as an empty object
    error: null, // Optionally, you can include an error field
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExchangeRates.fulfilled, (state, action) => {
      // Set the rates in the state to the payload
      state.rates = action.payload;
    });
    builder.addCase(fetchExchangeRates.rejected, (state, action) => {
      // Handle any error and update the error field if needed
      state.error = action.error.message;
    });
  },
});

export default CoinExchangeSlice.reducer;
