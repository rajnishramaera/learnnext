import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  ApiData: [],
}

const ApiDataSlice = createSlice({
  name: "ApiData",
  initialState,
  reducers: {
    setOrUpdateApiData: (state, action) => {
      state.ApiData = action.payload
    },
  },
})
export const { setOrUpdateApiData } = ApiDataSlice.actions
export default ApiDataSlice.reducer
