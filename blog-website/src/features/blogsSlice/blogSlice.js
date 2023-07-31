import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getBlogs from "./blogsApi";

const initialState = {
  isLoading: false,
  blogs: [],
  isError: false,
  error: "",
};

const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async ({ sorts, filter }) => {
    const response = await getBlogs(sorts, filter);

    return response.data;
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state, action) => {
        state.isLoading = true;
        state.blogs = [];
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = [];
        state.isError = true;
        state.error = action?.error?.message;
      });
  },
});

export default blogsSlice.reducer;
export { fetchBlogs };
