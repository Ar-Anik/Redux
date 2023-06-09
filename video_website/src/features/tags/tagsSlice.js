import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTag from "./tagsAPI";

const initialState = {
  isLoading: false,
  tags: [],
  isError: false,
  error: "",
};

const fetchTag = createAsyncThunk("tag/fetchTag", async () => {
  const response = await getTag();

  return response.data;
});

const tagSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTag.pending, (state) => {
        state.isLoading = true;
        state.tags = [];
        state.isError = false;
        state.error = "";
      })

      .addCase(fetchTag.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
        state.isError = false;
        state.error = "";
      })

      .addCase(fetchTag.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default tagSlice.reducer;
export { fetchTag };
