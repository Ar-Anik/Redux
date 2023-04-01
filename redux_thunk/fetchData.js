const fetch = require("node-fetch");

const FetchData = async (dispatch, getState) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=6"
  );
  const todos = await response.json();

  dispatch({
    type: "todo/loaded",
    payload: todos,
  });

  console.log(`Store Size : ${getState().todos.length}`);
};

module.exports = {
  FetchData,
};
