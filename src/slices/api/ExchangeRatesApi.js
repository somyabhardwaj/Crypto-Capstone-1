import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API endpoint to fetch exchange rates data
const getExchangeRateUrl = "https://api.coingecko.com/api/v3/exchange_rates";

// Create an asynchronous Redux thunk action to fetch exchange rates
const fetchExchangeRates = createAsyncThunk(
  "exchangeRates/fetchExchangeRates",
  async () => {
    try {
      // Send a GET request to the exchange rates API
      const response = await axios.get(getExchangeRateUrl);

      // Return the response data, which contains exchange rate information
      return response.data;
    } catch (err) {
      // Throw any errors that occur during the request
      throw err;
    }
  }
);

export default fetchExchangeRates;
