import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { api } from 'common/configs'
import { APP_TYPES } from 'stores/types'

export const getAllProducts = createAsyncThunk(
  APP_TYPES.PRODUCTS.GETPRODUCTS,
  async (params, { rejectWithValue }) => {
    console.log(api.PRODUCT.GET_PRODUCTS)
    try {
      // const response = await axios.get('http://localhost:3001/api/v1/products')
      const response = await axios.get(api.PRODUCT.GET_PRODUCTS)
      return response
    } catch (err) {
      switch (err.response.status) {
        default:
      }
      return rejectWithValue(err.response)
    }
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: []
  },
  reducers: {},
  extraReducers: {
    [getAllProducts.fulfilled]: (state, action) => {
      return {
        ...state,
        products: action.payload
      }
    },
    [getAllProducts.rejected]: (state) => {
      return state
    }
  }
})

export const {} = productSlice.actions

export const selectProducts = (state) => state.products

export default productSlice.reducer
