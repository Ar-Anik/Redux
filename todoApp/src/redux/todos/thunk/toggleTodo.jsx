import { toogled } from "../actions";

const toggleTodo = (todoId, status) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        complete: !status,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const todo = await response.json();

    dispatch(toogled(todo.id));
  };
};

export default toggleTodo;
