const { createStore, applyMiddleware } = require("redux");
const { delayforshow, fetchApi } = require("./middleware");

// Initial State
const initialState = {
  todos: [],
};

// Reducer
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

// store create
const store = createStore(reducer, applyMiddleware(delayforshow, fetchApi));

// store subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// action dispatch
// store.dispatch({
//   type: "todo/added",
//   payload: "Learn React-Redux",
// });

store.dispatch({
  type: "todo/fetchData",
});
