import initialState from "./initialState";
import { STATECHANGE, SEARCHFIELDCHANGE } from "./actions";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATECHANGE:
      return {
        ...state,
        status: action.payload,
      };

    case SEARCHFIELDCHANGE:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
