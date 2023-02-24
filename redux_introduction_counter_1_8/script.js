const countEl = document.getElementById("count");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

const INCREMENT = "increment";
const DECREMENT = "decrement";

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

const intialState = {
  value: 0,
};

function counterReducer(state = intialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  countEl.innerText = state.value;
};

render();

store.subscribe(render);

incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
