import { createSlice } from "@reduxjs/toolkit";
import fetchMarket from "../api/MarketDataApi";

const marketDataSlice = createSlice(
    {
        name:'marketData',
        initialState: {
            marketData: [], // Ensure this is correctly initialized as an empty array
            status: 'idle',
            error: null,
          },
        reducers:{},
        extraReducers:(builder)=>{
            builder
            .addCase(fetchMarket.pending, (state)=>
            {
             state.status = 'loading';
                 
            })
            .addCase(fetchMarket.fulfilled, (state, action)=>{
                state.status = 'success';
                console.log("action..payload", action.payload);
                state.marketData = action.payload;
            }
            )
            .addCase(fetchMarket.rejected, (state, action)=>{
                state.status = 'rejected';
                state.error =action.error.message;
                
            }
            )
        }    
}
)

export default marketDataSlice.reducer