import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogsSlice/blogSlice";
import filterReducer from "../features/filterSlice/filterSlice";
import blogReducer from "../features/blogSlice/blogSlice";
import relatedBlogSlice from "../features/relatedBlog/relatedBlogSlice";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    filters: filterReducer,
    blog: blogReducer,
    relatedBlog: relatedBlogSlice,
  },
});

export default store;
