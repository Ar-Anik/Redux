import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getBlog from "./blogApi";

const initialState = {
  isLoading: false,
  blog: {},
  isError: false,
  error: "",
};

const fetchBlog = createAsyncThunk("blog/fetchBlog", async (blogId) => {
  const response = await getBlog(blogId);
  return response.data;
});

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isLoading = true;
        state.blog = {};
        state.isError = false;
        state.error = "";
      })

      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
        state.isError = false;
        state.error = "";
      })

      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.blog = {};
        state.isError = true;
        state.error = action?.error?.message;
      });
  },
});

export default blogSlice.reducer;
export { fetchBlog };
