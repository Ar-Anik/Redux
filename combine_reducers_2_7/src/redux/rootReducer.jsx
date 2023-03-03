import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";

const rootReducer = combineReducers({
  rcounter: counterReducer,
  rdcounter: dynamicCounterReducer,
});

export default rootReducer;
