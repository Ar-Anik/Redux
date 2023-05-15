const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  count: 0,
};

const dynamicCounterSlice = createSlice({
  name: "dynamicCounter",
  initialState: initialState,
  reducers: {
    dIncrement: (state, action) => {
      state.count += action.payload;
    },
    dDecrement: (state, action) => {
      state.count -= action.payload;
    },
  },
  extraReducers: {
    ["counter/increment"]: (state, action) => {
      state.count += 1;
    },
  },
});

module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;
