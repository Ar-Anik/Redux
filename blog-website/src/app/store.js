import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogsSlice/blogSlice";
import filterReducer from "../features/filterSlice/filterSlice";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    filters: filterReducer,
  },
});

export default store;
