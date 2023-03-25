import PRODUCTADD from "./actionType";
import InitialState from "./initialState";

const productReducer = (state = InitialState, action) => {
  switch (action.type) {
    case PRODUCTADD:
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
    default:
      return state;
  }
};

export default productReducer;
