import {
  ADDED,
  LOADED,
  TOGGLED,
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

const loaded = (todos) => {
  return {
    type: LOADED,
    payload: todos,
  };
};

const toogled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
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

export {
  added,
  loaded,
  toogled,
  colorSelected,
  deleted,
  clearcompleted,
  allcompleted,
};
