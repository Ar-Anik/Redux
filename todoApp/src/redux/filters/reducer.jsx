import { STATUSCHANGED, COLORCHANGED } from "./actions";
import initialState from "./initialState";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case COLORCHANGED:
      const { color, changeType } = action.payload;
      console.log("color : ", color, " changeType : ", changeType);

      switch (changeType) {
        case "add":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "remove":
          return {
            ...state,
            colors: state.colors.filter((clr) => clr !== color),
          };

        default:
          return state;
      }
    default:
      return state;
  }
};

export default filterReducer;
