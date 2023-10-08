import { createSlice } from "@reduxjs/toolkit";

const ChartCoinSlice = createSlice({

    name:'coin',
    initialState:"bitcoin",
    reducers:{
        setCoin:(state, action)=>{
            
            console.log("Coin action is set to",action);
            console.log("Coin reducer is set to",action.payload);
       return action.payload;
      
        }
    }
})

export const {setCoin} = ChartCoinSlice.actions
export default ChartCoinSlice.reducer