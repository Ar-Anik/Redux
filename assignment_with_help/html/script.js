const allElement = document.getElementById("allelement");
const addElement = document.getElementById("addbutton");
const resetElement = document.getElementById("resetbutton");

// action
const ADDMATCH = "match/add";
const INCREMENT = "count/increment";
const DECREMENT = "count/decrement";
const RESET = "count/reset";
const DELETEITEM = "match/delete";

// actionCreator
const addMatch = () => {
  return {
    type: ADDMATCH,
  };
};

const increment = ({ id, value }) => {
  console.log("increment action creator : ", id, value);
  return {
    type: INCREMENT,
    payload: {
      id: id,
      value: value,
    },
  };
};

const decrement = ({ id, value }) => {
  return {
    type: DECREMENT,
    payload: {
      id: id,
      value: value,
    },
  };
};

const deletes = (id) => {
  return {
    type: DELETEITEM,
    payload: {
      id: id,
    },
  };
};

const reset = () => {
  return {
    type: RESET,
  };
};

const incrementHandler = (id, formel) => {
  const input = formel.querySelector("#input1");
  const value = Number(input.value);

  store.dispatch(increment({ id, value }));
};

const decrementHandler = (id, formel) => {
  const input = formel.querySelector("#input2");
  const value = Number(input.value);

  store.dispatch(decrement({ id, value }));
};

const deleteHandler = (id) => {
  store.dispatch(deletes(id));
};

const initialState = [
  {
    id: 1,
    score: 0,
  },
];

// Reducer
const counterReduer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    const newState = state.map((element) => {
      if (element.id === action.payload.id) {
        return {
          ...element,
          score: element.score + action.payload.value,
        };
      } else {
        return element;
      }
    });

    return newState;
  } else if (action.type === DECREMENT) {
    const newState = state.map((element) => {
      if (element.id === action.payload.id) {
        const newValue = element.score - action.payload.value;

        return {
          ...element,
          score: newValue >= 0 ? newValue : 0,
        };
      } else {
        return element;
      }
    });

    return newState;
  } else if (action.type === RESET) {
    const newState = state.map((element) => {
      return {
        ...element,
        score: 0,
      };
    });
    return newState;
  } else if (action.type === ADDMATCH) {
    newState = state[state.length - 1];
    return [...state, { id: newState.id + 1, score: 0 }];
  } else if (action.type === DELETEITEM) {
    const newState = state.map((element) => {
      if (element.id !== action.payload.id) {
        return element;
      }
    });

    return newState;
  } else {
    return state;
  }
};

const store = Redux.createStore(counterReduer);

const render = () => {
  const allState = store.getState();
  console.log(allState);
  const newState = allState
    .map((item) => {
      return `
        <div class="match">
        <div class="wrapper">
          <button class="lws-delete" onclick="deleteHandler(${item.id})">
            <img src="./image/delete.svg" alt="" />
          </button>
          <h3 class="lws-matchName">Match ${item.id}</h3>
        </div>
        <div class="inc-dec">
          <form class="incrementForm" onsubmit="event.preventDefault(); incrementHandler(${item.id}, this)">
            <h4>Increment</h4>
            <input type="number" name="increment" class="lws-increment" id="input1"/>
          </form>

          <form class="decrementForm" onsubmit="event.preventDefault(); decrementHandler(${item.id}, this)">
            <h4>Decrement</h4>
            <input type="number" name="decrement" class="lws-decrement" id="input2" />
          </form>
        </div>
        <div class="numbers">
          <h2 class="lws-singleResult">${item.score}</h2>
        </div>
      </div>
      `;
    })
    .join("");

  allElement.innerHTML = newState;
};

render();

store.subscribe(() => render());

addElement.addEventListener("click", () => {
  store.dispatch(addMatch());
});

resetElement.addEventListener("click", () => {
  store.dispatch(reset());
});
