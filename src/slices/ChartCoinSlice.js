import { createSlice } from "@reduxjs/toolkit";

const ChartCoinSlice = createSlice({

    name:'coin',
    initialState:"bitcoin",
    reducers:{
        setCoin:(state, action)=>{
            
       return action.payload;
      
        }
    }
})

export const {setCoin} = ChartCoinSlice.actions
export default ChartCoinSlice.reducer