const store = require("./app/store");
const { counterActions } = require("./feature/counter/counterSlice");
const { increment, decrement } = counterActions;

const {
  dynamicCounterActions,
} = require("./feature/dynamicCounter/dynamicCounterSlice");
const { d_increment, d_decrement } = dynamicCounterActions;

console.log(`Initial State : ${JSON.stringify(store.getState())}`);

store.subscribe(() => {
  console.log(store.getState());
});

console.log("For Counter Slice : ");
store.dispatch(increment());

store.dispatch(increment());

store.dispatch(decrement());

console.log("For Dynamic Counter Slice : ");

store.dispatch(d_increment(5));

store.dispatch(d_increment(6));

store.dispatch(d_decrement(1));
