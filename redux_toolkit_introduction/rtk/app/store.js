// const configureStore = require("@reduxjs/toolkit").configureStore;
const { configureStore } = require("@reduxjs/toolkit");
const counterReducer = require("../feature/counter/counterSlice");

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

module.exports = store;
