import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({

    name:'timeButton',
    initialState:{
        time:10
    },
    reducers:{
         timeButton:(state,action)=>{
           
            return state.time = action.payload;
            

         }


    }

})

export const {timeButton} = timeSlice.actions ;
export default timeSlice.reducer;