const fetch = require("node-fetch");

const FetchData = async (dispatch, getState) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=7"
  );
  const todos = await response.json();

  dispatch({
    type: "todo/loaded",
    payload: todos,
  });

  console.log(`Updated Store todos Length : ${getState().todos.length}`);
};

module.exports = {
  FetchData,
};
