// Import necessary libraries and modules
import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice for managing chart options
const ChartOptionSlice = createSlice({
  name: "ChartOption",
  initialState: "LineChart", // Default chart option
  reducers: {
    setChart: (state, action) => {
      return action.payload; // Update the state with the selected chart option
    },
  },
});

// Export the action creator and the reducer from the ChartOptionSlice
export const { setChart } = ChartOptionSlice.actions;
export default ChartOptionSlice.reducer;
