import { DINCREMENT, DDECREMENT } from "./actionTypes";

const dincrement = (value) => {
  return {
    type: DINCREMENT,
    payload: value,
  };
};

const ddecrement = (value) => {
  return {
    type: DDECREMENT,
    payload: value,
  };
};

export { dincrement, ddecrement };
