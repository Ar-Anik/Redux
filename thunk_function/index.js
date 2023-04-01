const { createStore, applyMiddleware } = require("redux");
const { FetchData } = require("./fetchData");
const { fetchAsyncMiddleware } = require("./middleware");

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/added":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };
    case "todo/loaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(fetchAsyncMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(FetchData); // FetchData ===> Thunk Function()
