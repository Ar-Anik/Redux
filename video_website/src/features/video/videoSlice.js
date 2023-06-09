import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getVideo from "./videoAPI";

const initialState = {
  isLoading: false,
  video: {},
  isError: false,
  error: "",
};

const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const response = await getVideo(id);

  return response.data;
});

const vidoeSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isLoading = true;
        state.video = {};
        state.isError = false;
        state.error = "";
      })

      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
        state.isError = false;
        state.error = "";
      })

      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default vidoeSlice.reducer;
export { fetchVideo };
