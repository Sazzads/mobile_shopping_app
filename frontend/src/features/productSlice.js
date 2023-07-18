import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    items: [],
    status: null,
    // error: null
}

// export const productFetch = createAsyncThunk(
//     "products/productFetch",
//     async (id = null, { rejectWithValue }) => {
//         try {

//             const response = await axios.get("https://backend-sazzads.vercel.app/product")
//             return response?.data
//         }
//         catch (error) {
//             return rejectWithValue("An error occurred",error.response.data);
//             state.error = action.payload;
//         }
//     }
// )

export const productFetch = createAsyncThunk(
    "products/productFetch",
    async () => {
            const response = await axios.get("https://backend-sazzads.vercel.app/products")
            return response?.data
    }
)

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productFetch.pending]: (state, action) => {

            state.status = "pending"
        },
        [productFetch.fulfilled]: (state, action) => {

            state.status = "success"
            state.items = action.payload
        },
        [productFetch.rejected]: (state, action) => {

            state.status = "rejected"
        },
    }

})

export default productSlice.reducer
