import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogsSlice/blogSlice";
import filterReducer from "../features/filterSlice/filterSlice";
import blogReducer from "../features/blogSlice/blogSlice";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    filters: filterReducer,
    blog: blogReducer,
  },
});

export default store;
