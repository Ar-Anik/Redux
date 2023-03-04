import { combineReducers } from "redux";
import CounterReducer from "./counter/counterReducer";
import DynamicCounterReducer from "./dynamicCounter/dynamicReducer";

const rootReducer = combineReducers({
  counter: CounterReducer,
  dynamic: DynamicCounterReducer,
});

export default rootReducer;
