import { createSlice } from "@reduxjs/toolkit";
import  fetchCurrencyDrop  from '../slices/api/GetCurrencyApi'

const CurrencyDropDownSlice = createSlice({
  name: 'currencyDrop',
  initialState: "usd",
  reducers: {
    currencyDrop:((state,action)=>{

        return action.payload
    }

    )
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyDrop.fulfilled, (state, action) => {
        // Update the state with the fetched data
        return action.payload; // Assuming action.payload contains the new currency data
      });
  },
});

export const { currencyDrop } = CurrencyDropDownSlice.actions; // Export the action creator

export default CurrencyDropDownSlice.reducer;
