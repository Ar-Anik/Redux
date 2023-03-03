import { DDECREMENT, DINCREMENT } from "./actions";

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
