import { DDECREMENT, DINCREMENT } from "./actionTypes";

const dynamicIncrement = (value) => {
  return {
    type: DINCREMENT,
    payload: value,
  };
};

const dynamicDecrement = (value) => {
  return {
    type: DDECREMENT,
    payload: value,
  };
};

export { dynamicIncrement, dynamicDecrement };
