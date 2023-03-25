import { combineReducers } from "redux";
import productReducer from "./product/productReducer";
import CartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  products: productReducer,
  carts: CartReducer,
});

export default rootReducer;
