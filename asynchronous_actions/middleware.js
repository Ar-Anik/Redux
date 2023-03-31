const fetch = require("node-fetch");

const delayforshow = (store) => (next) => (action) => {
  if (action.type === "todo/added") {
    console.log("This Middleware delay action dispatch");

    setTimeout(() => {
      next(action);
    }, 2000);

    return;
  }

  return next(action);
};

const fetchApi = (store) => (next) => async (action) => {
  if (action.type === "todo/fetchData") {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=6"
    );
    const data = await response.json();

    store.dispatch({
      type: "todo/loaded",
      payload: data,
    });

    console.log(`Length of Todo data : ${store.getState().todos.length}`);

    return;
  }

  return next(action);
};

module.exports = {
  delayforshow,
  fetchApi,
};
