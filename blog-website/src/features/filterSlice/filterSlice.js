import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sorts: "",
  filter: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sortSeleted: (state, action) => {
      state.sorts = action.payload;
    },
    filterSeleted: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { sortSeleted, filterSeleted } = filterSlice.actions;
