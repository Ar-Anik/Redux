const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const resetEl = document.getElementById("reset");

const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

let item = 1;

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

const reset = () => {
  return {
    type: RESET,
  };
};

const initialState = {
  value: 0,
};

function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    let vlu = state.value;
    vlu = state.value - action.payload;

    if (vlu >= 0) {
      return {
        ...state,
        value: state.value - action.payload,
      };
    } else {
      return {
        ...state,
        value: 0,
      };
    }
  } else if (action.type === RESET) {
    return {
      ...state,
      value: 0,
    };
  } else {
    return state;
  }
}

const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value;
};

render();

store.subscribe(render);

incrementEl.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const data = Number(event.target.value);
    store.dispatch(increment(data));
  }
});

decrementEl.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const data = Number(event.target.value);
    store.dispatch(decrement(data));
  }
});

resetEl.addEventListener("click", (event) => {
  event.preventDefault();
  store.dispatch(reset());
});

const addButton = document.getElementById("addone");
let allContainer = document.getElementById("allContainer");

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  item++;
  allContainer.innerHTML += `
    <div class="match" id="allElement">
        <div class="wrapper">
        <button class="lws-delete">
            <img src="./image/delete.svg" alt="" />
        </button>
        <h3 class="lws-matchName" id="match"></h3>
        </div>
        <div class="inc-dec">
        <form class="incrementForm">
            <h4>Increment</h4>
            <input
            type="number"
            name="increment"
            class="lws-increment"
            id="increment1"
            />
        </form>

        <form class="decrementForm">
            <h4>Decrement</h4>
            <input
            type="number"
            name="decrement"
            class="lws-decrement"
            id="decrement1"
            />
        </form>
        </div>

        <div class="numbers">
        <h2 class="lws-singleResult" id="counter1"></h2>
        </div>
      </div>
    </div>
    </section>`;

  const match = document.getElementById("match");
  match.innerHTML = "Match-" + item;

  const increment1El = document.getElementById("increment1");
  const decrement1El = document.getElementById("decrement1");
  const counter1El = document.getElementById("counter1");

  const INCREMENT1 = "increment";
  const DECREMENT1 = "decrement";

  const increment1 = (value) => {
    return {
      type: INCREMENT1,
      payload: value,
    };
  };

  const decrement1 = (value) => {
    return {
      type: DECREMENT1,
      payload: value,
    };
  };

  const initialState1 = {
    value: 0,
  };

  function counterReducer1(state = initialState1, action) {
    if (action.type === INCREMENT1) {
      return {
        ...state,
        value: state.value + action.payload,
      };
    } else if (action.type === DECREMENT1) {
      let vlu = state.value;
      vlu = state.value - action.payload;

      if (vlu >= 0) {
        return {
          ...state,
          value: state.value - action.payload,
        };
      } else {
        return {
          ...state,
          value: 0,
        };
      }
    } else {
      return state;
    }
  }

  const store1 = Redux.createStore(counterReducer1);

  const render1 = () => {
    const state = store1.getState();
    counter1El.innerHTML = state.value;
  };

  render1();

  store1.subscribe(render1);

  increment1El.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const data = Number(event.target.value);
      store1.dispatch(increment1(data));
    }
  });

  decrement1El.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const data = Number(event.target.value);
      store1.dispatch(decrement1(data));
    }
  });
});
