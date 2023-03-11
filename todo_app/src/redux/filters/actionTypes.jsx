import { STATUSCHANGED, COLORCHANGED } from "./actions";

const statusChange = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};

const colorChange = (color, changeType) => {
  return {
    type: COLORCHANGED,
    payload: { color, changeType },
  };
};

export { statusChange, colorChange };
