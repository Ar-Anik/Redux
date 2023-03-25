import InitialState from "./initialState";
import { ADDED, ADD, SUB, DELETED } from "./actionTypes";

const CartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADDED:
      console.log("Payload : ", action.payload);
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          category: action.payload.category,
          imageUrl: action.payload.imageUrl,
          price: action.payload.price,
          quantity: 1,
          total: action.payload.price,
        },
      ];
    case ADD:
      const addState = state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity + 1,
            total: product.total + product.price,
          };
        } else {
          return product;
        }
      });

      return addState;

    case SUB:
      const subState = state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1,
            total: product.total - product.price,
          };
        } else {
          return product;
        }
      });

      return subState;

    case DELETED:
      return state.filter((product) => product.id !== action.payload);

    default:
      return state;
  }
};

export default CartReducer;
