import InitialState from "./initialState";
import { ADDED, ADD, SUB, DELETED } from "./actionTypes";

const CartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADDED:
      const exist = state.filter((product) => product.id === action.payload.id);
      if (exist.length > 0) {
        const existProduct = state.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: Number(product.quantity) + 1,
              total: Number(product.total) + Number(product.price),
            };
          } else {
            return product;
          }
        });

        return existProduct;
      } else {
        return [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            category: action.payload.category,
            imageUrl: action.payload.imageUrl,
            price: Number(action.payload.price),
            quantity: 1,
            total: Number(action.payload.price),
          },
        ];
      }
    case ADD:
      const addState = state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: Number(product.quantity) + 1,
            total: Number(product.total) + Number(product.price),
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
            total: Number(product.total) - Number(product.price),
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
