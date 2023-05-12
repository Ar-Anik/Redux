const store = require("./app/store");
const { counterActions } = require("./feature/counter/counterSlice");
const { increment, decrement } = counterActions;

console.log(`Initial State : ${JSON.stringify(store.getState())}`);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());

store.dispatch(increment());

store.dispatch(decrement());
