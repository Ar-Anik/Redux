import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getVideos from "./videosAPI";

const initialState = {
  isLoading: false,
  videos: [],
  isError: false,
  error: "",
};

const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags, search }) => {
    const response = await getVideos(tags, search);

    return response.data;
  }
);

const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isLoading = true;
        state.videos = [];
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videosSlice.reducer;
export { fetchVideos };
