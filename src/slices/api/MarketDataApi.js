import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API endpoint to fetch market data
const marketURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en';

// Create an asynchronous Redux thunk action to fetch market data
const fetchMarket = createAsyncThunk('market/fetchMarket', async () => {
    try {
        // Send a GET request to the market data API
        const response = await axios.get(marketURL);

        // Return the response data, which contains market data for cryptocurrencies
        return response.data;
    } catch (error) {
        // Throw any errors that occur during the request
        throw error;
    }
});

export default fetchMarket;
