import { createSlice } from "@reduxjs/toolkit";

const ChartOptionSlice = createSlice({

    name:"ChartOption",
    initialState:"VerticalBarChart",
    reducers:{
        setChart:(state , action)=>{
             return action.payload
        }
    }

})

export const {setChart} = ChartOptionSlice.actions
export default ChartOptionSlice.reducer