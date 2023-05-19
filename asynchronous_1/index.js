const axios = require("axios");
const { createStore, applyMiddleware } = require("redux");

const thunkMiddleware = require("redux-thunk");

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const fetchPostRequested = () => {
  return {
    type: "posts/requested",
  };
};

const fetchPostSucceeded = (posts) => {
  return {
    type: "posts/succeeded",
    payload: posts,
  };
};

const fetchPostFailed = (error) => {
  return {
    type: "posts/failed",
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "posts/requested":
      return {
        ...state,
        loading: true,
        error: "",
        posts: [],
      };

    case "posts/succeeded":
      return {
        ...state,
        loading: false,
        error: "",
        posts: action.payload,
      };

    case "posts/failed":
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        posts: [],
      };

    default:
      return state;
  }
};

// thunk-function
const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostRequested());

    try {
      const response = await axios.default(
        "https://jsonplaceholder.typicode.com/posts/?_limit=5"
      );
      const posts = await response.data;

      dispatch(fetchPostSucceeded(posts));
    } catch (error) {
      dispatch(fetchPostFailed(error));
    }
  };
};

const fetchPostsWithError = () => {
  return async (dispatch) => {
    dispatch(fetchPostRequested());

    try {
      const response = await axios.default(
        "https://jsonplaceholder.typicodes.com/posts/?_limit=5"
      );
      const posts = await response.data;

      dispatch(fetchPostSucceeded(posts));
    } catch (error) {
      dispatch(fetchPostFailed(error));
    }
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware.default));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchPosts());

// with error
store.dispatch(fetchPostsWithError());
