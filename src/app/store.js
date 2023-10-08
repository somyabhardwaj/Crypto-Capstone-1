// store.js
import { configureStore } from "@reduxjs/toolkit";
import ChartDataReducer from "../slices/ChartDataSlice";
import timeButtonReducer from "../slices/timeButtonSlice";
import marketDataReducer from "../slices/marketDataSlice";
import currencyReducer from "../slices/CurrencySlice";
import ChartCoinReducer from "../slices/ChartCoinSlice";
import CurrencyDropDownReducer from "../slices/CurrencyDropdownSlice";
import ChartOptionReducer from "../slices/ChartOptionSlices";
const store = configureStore({
  reducer: {
    chartData:ChartDataReducer,
    setTime:timeButtonReducer,
    setCurrency:currencyReducer,
    setCoin:ChartCoinReducer,
    marketData:marketDataReducer,
    currencyDrop:CurrencyDropDownReducer,
    setChart:ChartOptionReducer,

  },
});

export default store;
