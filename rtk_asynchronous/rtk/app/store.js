const { configureStore } = require("@reduxjs/toolkit");
const postReducer = require("../feature/posts/postSlice");
const { createLogger } = require("redux-logger");
const logger = createLogger();

const store = configureStore({
  reducer: {
    post: postReducer,
  },

  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;
