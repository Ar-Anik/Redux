const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  count: 0,
};

const dynamicCounterSlice = createSlice({
  name: "dynamicCounter",
  initialState: initialState,
  reducers: {
    d_increment: (state, action) => {
      state.count += action.payload;
    },
    d_decrement: (state, action) => {
      state.count -= action.payload;
    },
  },
});

module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;
