import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const getExchangeRateUrl=`https://api.coingecko.com/api/v3/exchange_rates`

const fetchExchangeRates = createAsyncThunk('excangeRates/fetchExchangeRates', async()=>{
   try{
      const response = await axios.get(getExchangeRateUrl);
    return response.data;
   }
   catch(err)
   {
    throw (err)
   }
})

export default fetchExchangeRates; 