const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const videoReducer = require("../features/videoSlice");
const sortVideosReducer = require("../features/sortVideoSlice");
const { createLogger } = require("redux-logger");
const logger = createLogger();

const store = configureStore({
  reducer: {
    video: videoReducer,
    sortVideo: sortVideosReducer,
  },

  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;
