import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";



const chartUrl=`https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1`;



export const fetchChart = createAsyncThunk('chart/fetchChart', async () => {
    try {
      const response = await axios.get(chartUrl);
      const data = response.data.prices; // Extract the prices array from the API response
  
      // Transform the data into separate arrays for labels and data points
      const labels = data.map(([timestamp]) => {
        const date = new Date(timestamp);
        // You can format the date as needed, e.g., 'Jan 1' for January 1st
        return `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}`;
      });
  
      const dataPoints = data.map(([, price]) => price);
  
      return { labels, data: dataPoints };
    } catch (err) {
      throw err; // Let the error propagate
    }
  });



  const ChartDataSlice = createSlice({
    name: "chartData",
    initialState: {
      label: ["jan", "feb", "mar"],
      data: [22, 60, 30],
    },
    reducers: {
          },
    extraReducers: (builder) => {
      builder
        .addCase(fetchChart.fulfilled, (state, action) => {
          // Update the state with the fetched data
          state.label = action.payload.labels;
          state.data = action.payload.data;
        });
    },
  });

export const { updateLabel, updateData } = ChartDataSlice.actions;

export default ChartDataSlice.reducer;
