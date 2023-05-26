const { createSlice } = require("@reduxjs/toolkit");
const { fetchVideo } = require("../thunkFunction");

const initialState = {
  loading: false,
  video: [],
  error: "",
};

const videoSlice = createSlice({
  name: "posts",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVideo.pending, (state, action) => {
      state.loading = true;
      state.error = "";
      state.video = [];
    });

    builder.addCase(fetchVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.video = action.payload;
    });

    builder.addCase(fetchVideo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.video = [];
    });
  },
});

module.exports = videoSlice.reducer;
