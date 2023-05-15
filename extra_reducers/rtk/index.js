const store = require("./app/store");
const { counterActions } = require("./feature/counter/counterSlice");
const {
  dynamicCounterActions,
} = require("./feature/dynamicCounter/dynamicCounterSlice");

const { increment, decrement } = counterActions;
const { dIncrement, dDecrement } = dynamicCounterActions;

store.dispatch(increment());
store.dispatch(dIncrement(2));
store.dispatch(dDecrement(1));
