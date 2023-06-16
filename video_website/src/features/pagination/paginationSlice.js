const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  pageNumber: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    pageSelect: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

export default paginationSlice.reducer;
export const { pageSelect } = paginationSlice.actions;
