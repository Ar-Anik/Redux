import { PRODUCTADDED, PRODUCTADD, PRODUCTSUB } from "./actionType";
import InitialState from "./initialState";

const productReducer = (state = InitialState, action) => {
  switch (action.type) {
    case PRODUCTADDED:
      const lastState = state[state.length - 1];
      let Id = 0;
      if (lastState) Id = lastState.id;

      return [
        ...state,
        {
          id: Id + 1,
          name: action.payload.productName,
          category: action.payload.category,
          imageUrl: action.payload.imgUrl,
          price: action.payload.price,
          quantity: action.payload.quantity,
        },
      ];

    case PRODUCTADD:
      const productadd = state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: Number(product.quantity) + 1,
          };
        } else {
          return product;
        }
      });

      return productadd;

    case PRODUCTSUB:
      const productsub = state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: Number(product.quantity) - 1,
          };
        } else {
          return product;
        }
      });

      return productsub;

    default:
      return state;
  }
};

export default productReducer;
