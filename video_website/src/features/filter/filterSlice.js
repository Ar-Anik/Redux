import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },

    tagremoved: (state, action) => {
      const isStay = state.tags.indexOf(action.payload);

      if (isStay !== -1) {
        state.tags.splice(isStay, 1);
      }
    },

    searchSelected: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagremoved, searchSelected } = filterSlice.actions;
