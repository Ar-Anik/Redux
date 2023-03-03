import { combineReducers } from "redux";
import CounterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCouter/dynamicCounterReducer";

const rootReducers = combineReducers({
  counter: CounterReducer,
  dynamicCounter: dynamicCounterReducer,
});

export default rootReducers;
