import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getRelatedVideos from "./relatedVideosAPI";

const initialState = {
  isLoading: false,
  relatedVideos: [],
  isError: false,
  error: "",
};

const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ id, tags }) => {
    const response = await getRelatedVideos(id, tags);

    return response.data;
  }
);

const relatedVideosSlice = createSlice({
  name: "reloatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isLoading = true;
        state.relatedVideos = [];
        state.isError = false;
        state.error = "";
      })

      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
        state.isError = false;
        state.error = "";
      })

      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
export { fetchRelatedVideos };
