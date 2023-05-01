import { STATECHANGE, SEARCHFIELDCHANGE } from "./actions";

const stateChange = (value) => {
  return {
    type: STATECHANGE,
    payload: value,
  };
};

const searchChange = (value) => {
  return {
    type: SEARCHFIELDCHANGE,
    payload: value,
  };
};

export { stateChange, searchChange };
