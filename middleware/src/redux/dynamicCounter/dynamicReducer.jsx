import { DINCREMENT, DDECREMENT } from "./actionTypes";

const initialState = {
  value: 0,
};

const DynamicCounterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + actions.payload,
      };
    case DDECREMENT:
      return {
        ...state,
        value: state.value - actions.payload,
      };
    default:
      return state;
  }
};

export default DynamicCounterReducer;
