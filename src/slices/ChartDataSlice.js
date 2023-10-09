// Import necessary libraries and modules
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Define a function to generate the chart data URL based on inputs
const getChartUrl = (setCoin = 'bitcoin', setCurrency = 'usd', setTime = 180) => `https://api.coingecko.com/api/v3/coins/${setCoin}/market_chart?vs_currency=${setCurrency}&days=${setTime}`;

// Create an async thunk to fetch chart data from the API
export const fetchChart = createAsyncThunk('chart/fetchChart', async ({ setCoin, setCurrency, setTime }) => {
  try {
    // Generate the chart data URL
    const chartUrl = getChartUrl(setCoin, setCurrency, setTime);
    
    // Send a GET request to the API
    const response = await axios.get(chartUrl);
    
    // Extract the prices array from the API response
    const data = response.data.prices;

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

// Create a slice for chart data management
const ChartDataSlice = createSlice({
  name: "chartData",
  initialState: {
    label: ["jan", "feb", "mar"], // Default labels
    data: [22, 60, 30], // Default data points
  },
  reducers: {
    // Define any additional actions if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChart.fulfilled, (state, action) => {
        // Update the state with the fetched data when the async thunk is fulfilled
        state.label = action.payload.labels;
        state.data = action.payload.data;
      });
  },
});

// Export any additional actions and the reducer from the ChartDataSlice
export const { updateLabel, updateData } = ChartDataSlice.actions;
export default ChartDataSlice.reducer;
