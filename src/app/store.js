// store.js
import { configureStore } from "@reduxjs/toolkit";
import ChartDataReducer from "../slices/ChartDataSlice";
import timeButtonReducer from "../slices/timeButtonSlice";
import marketDataReducer from "../slices/marketDataSlice";


const store = configureStore({
  reducer: {
    chartData:ChartDataReducer,
    timeButton:timeButtonReducer,
    marketData:marketDataReducer,

  },
});

export default store;
