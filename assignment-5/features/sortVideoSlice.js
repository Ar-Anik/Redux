const { createSlice } = require("@reduxjs/toolkit");
const { fetchSortVideos } = require("../thunkFunction");

const initialState = {
  loading: false,
  sortVideo: [],
  error: "",
};

const sortVideoSlice = createSlice({
  name: "sortVideo",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSortVideos.pending, (state, action) => {
      state.loading = true;
      state.sortVideo = [];
      state.error = "";
    });

    builder.addCase(fetchSortVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.sortVideo = action.payload;
      state.error = "";
    });

    builder.addCase(fetchSortVideos.rejected, (state, action) => {
      state.loading = false;
      state.sortVideo = [];
      state.error = action.error.message;
    });
  },
});

module.exports = sortVideoSlice.reducer;
