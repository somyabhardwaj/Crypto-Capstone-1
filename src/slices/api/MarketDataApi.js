import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const marketURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en';

const fetchMarket =createAsyncThunk('market/fetchMarket', async ()=>{
try{
    const response = await axios.get(marketURL)
  
    return response.data;
   
}
catch  (error) {
    
   throw (error)
}
}) 

export default fetchMarket ;

