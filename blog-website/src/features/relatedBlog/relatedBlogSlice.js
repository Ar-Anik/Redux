import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getRealtedBlog from "./relatedBlogApi";

const initialState = {
  isLoading: false,
  blogs: [],
  isError: false,
  error: "",
};

const fetchRelatedBlogs = createAsyncThunk(
  "relatedBlog/fetchRelatedBlog",
  async ({ id = 0, tags = [] }) => {
    const response = await getRealtedBlog(id, tags);
    return response.data;
  }
);

const relatedBlog = createSlice({
  name: "relatedBlog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.isLoading = true;
        state.blogs = [];
        state.isError = false;
        state.error = "";
      })

      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
        state.isError = false;
        state.error = "";
      })

      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = [];
        state.isError = true;
        state.error = action?.error?.message;
      });
  },
});

export default relatedBlog.reducer;
export { fetchRelatedBlogs };
