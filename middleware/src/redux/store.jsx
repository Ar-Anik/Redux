import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

// middleware
const myLogger = (store) => (next) => (action) => {
  console.log(`Action : ${JSON.stringify(action)}`);
  console.log(`Before : ${JSON.stringify(store.getState())}`);

  const upcomingState = [action].reduce(rootReducer, store.getState());
  console.log(`Upcoming State : ${JSON.stringify(upcomingState)} `);

  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;
