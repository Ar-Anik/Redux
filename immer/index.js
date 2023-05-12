const { createStore } = require("redux");
const { produce } = require("immer");

const initialState = {
  name: "Aubdur Rob Anik",
  address: {
    street: "Khilgaon",
    city: "Dhaka",
    country: "Bangladesh",
  },
};

const updateStreet = (street) => {
  return {
    type: "street_update",
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "street_update":
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };

      return produce(state, (draftState) => {
        draftState.address.street = action.payload;
      });

    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(updateStreet("Gulistan"));
