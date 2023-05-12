const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  count: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
  },
});

module.exports = CounterSlice.reducer;
module.exports.counterActions = CounterSlice.actions;
