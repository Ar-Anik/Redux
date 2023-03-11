import {
  ADDED,
  TOGGLE,
  COLORSELECTED,
  DELETED,
  CLEARCOMPLETED,
  ALLCOMPLETED,
} from "./actionTypes";

const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

const toogle = (id) => {
  return {
    type: TOGGLE,
    payload: id,
  };
};

const colorSelected = (id, color) => {
  return {
    type: COLORSELECTED,
    payload: { id, color },
  };
};

const deleted = (id) => {
  return {
    type: DELETED,
    payload: id,
  };
};

const clearcompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};

const allcompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export { added, toogle, colorSelected, deleted, clearcompleted, allcompleted };
