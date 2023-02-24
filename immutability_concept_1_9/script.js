const counterEl = document.getElementById("count");
const immutEl = document.getElementById("immut");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const immutableEl = document.getElementById("immutable");

const INCREMENT = "increment";
const DECREMENT = "decrement";
const IMMUTABLE = "immutable";

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

const immutable = (value) => {
  return {
    type: IMMUTABLE,
    payload: value,
  };
};

const initialState = {
  value: 0,
  properties: {
    a: 5,
    b: 6,
  },
};

function counterReducer(state = initialState, action) {
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
  } else if (action.type === IMMUTABLE) {
    return {
      ...state,
      properties: {
        ...state.properties,
        b: state.properties.b + action.payload,
      },
    };
  } else {
    return state;
  }
}

const store = Redux.createStore(counterReducer);

const render1 = () => {
  const state = store.getState();
  counterEl.innerText = state.value;
};

const render2 = () => {
  const state = store.getState();
  immutEl.innerText = state.properties.b;
};

render1();
render2();

store.subscribe(render1);
store.subscribe(render2);

incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});

immutableEl.addEventListener("click", () => {
  store.dispatch(immutable(1));
});
