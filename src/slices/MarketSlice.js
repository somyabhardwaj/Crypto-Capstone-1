import { createSlice } from "@reduxjs/toolkit";

export const MarketSlice = createSlice({

    name:'marketData',
    initialState:{
        time:7,
        coin:'bitcoin',
        currency: 'USD',
    },
    reducers:{
        setTime:(state,action)=>{
            return state.time = action.payload
        },
        setCoin:(state,action)=>{
            return state.coin = action.payload
        },
        setCurrency:(state,action)=>{
            return state.currency = action.payload
        }

    }
})

export const {setTime, setCoin, setCurrency} =MarketSlice.actions;
export default MarketSlice.reducer ;