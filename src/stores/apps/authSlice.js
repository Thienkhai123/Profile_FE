import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {}
})

export const {} = authSlice.actions

export const selectCount = (state) => state.auth

export default authSlice.reducer
