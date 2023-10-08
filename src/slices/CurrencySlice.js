import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
    name: 'currency',
    initialState: "usd",
    reducers: {
        setCurrency: (state, action) => {
            
            return action.payload;
        }
    }
})

export const { setCurrency } = currencySlice.actions
export default currencySlice.reducer