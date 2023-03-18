import {
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
  ADDED,
} from "./actionTypes";

import InitialState from "./initialState";

const todoReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADDED:
      const lastState = state[state.length - 1];
      return [
        ...state,
        {
          id: lastState.id + 1,
          text: action.payload,
          complete: false,
        },
      ];
    case TOGGLED:
      const toggleState = state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      });

      return toggleState;

    case COLORSELECTED:
      const { todoId, color } = action.payload;

      const seletedState = state.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            color: color,
          };
        } else {
          return todo;
        }
      });

      return seletedState;

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLETED:
      const completeState = state.map((todo) => {
        return {
          ...todo,
          complete: true,
        };
      });

      return completeState;

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.complete);

    default:
      return state;
  }
};

export default todoReducer;
