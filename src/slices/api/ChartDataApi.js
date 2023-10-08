// import { createAsyncThunk } from "@reduxjs/toolkit";

// const chartURL = 'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=7';

// const fetchChart = createAsyncThunk ('chart/fetchChart', async ()=>{
// // 


//     try{
//         const response = await axios.get(chartURL);
//          const data = response.data.prices;

//          const labels = data.map(([timestamp])) =>{

//             const date = new Date(timestamp)
//          }
//         return response.data
//     }
//     catch (error){
//         throw (error)
//     }
// })

// export default fetchChart;