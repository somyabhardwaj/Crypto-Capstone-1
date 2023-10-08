// GetCurrencyApi.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const currencyUrl = 'https://api.coingecko.com/api/v3/simple/supported_vs_currencies';

const fetchCurrencyDrop= createAsyncThunk('currency/fetchCurrencyDrop', async () => {
    try {
        const response = await axios.get(currencyUrl);
        return response.data;
    } catch (err) {
        throw (err);
    }
});

export default fetchCurrencyDrop;
