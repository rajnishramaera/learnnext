import { configureStore } from "@reduxjs/toolkit"
import ApiDataReducer from "./slice/ApiDataSlice"

const store = configureStore({
  reducer: {
    ApiDataReducer,
  },
})
export default store
