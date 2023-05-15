const { createSlice } = require("@reduxjs/toolkit");
const {
  dynamicCounterActions,
} = require("../dynamicCounter/dynamicCounterSlice");

const { dIncrement } = dynamicCounterActions;

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(dIncrement, (state, action) => {
      state.count += action.payload;
    });
  },
});

module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;
