const { configureStore } = require("@reduxjs/toolkit");
const counterReducer = require("../feature/counter/counterSlice");
const dynamicCounterReducer = require("../feature/dynamicCounter/dynamicCounterSlice");

const { createLogger } = require("redux-logger");
const logger = createLogger();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
  },

  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;
