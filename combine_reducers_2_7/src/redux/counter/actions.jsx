import { INCREMENT, DECREMENT } from "./actionTypes";

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

export { increment, decrement };
