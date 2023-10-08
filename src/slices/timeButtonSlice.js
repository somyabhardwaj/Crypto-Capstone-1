import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({

    name: 'timeButton',
    initialState: {
        time: 180
    },
    reducers: {
        setTime: (state, action) => {
            state.time = action.payload;
        }
    }
})

export const { setTime } = timeSlice.actions;
export default timeSlice.reducer;