import { INCREMENT, DECREMENT } from "./actions";

const initialState = {
  value: 0,
};

const CounterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default CounterReducer;
