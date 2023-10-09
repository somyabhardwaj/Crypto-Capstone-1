import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API endpoint to fetch supported currency options
const currencyUrl = 'https://api.coingecko.com/api/v3/simple/supported_vs_currencies';

// Create an asynchronous Redux thunk action to fetch currency options
const fetchCurrencyDrop = createAsyncThunk('currency/fetchCurrencyDrop', async () => {
    try {
        // Send a GET request to the currency options API
        const response = await axios.get(currencyUrl);

        // Return the response data, which contains a list of supported currencies
        return response.data;
    } catch (err) {
        // Throw any errors that occur during the request
        throw err;
    }
});

export default fetchCurrencyDrop;
