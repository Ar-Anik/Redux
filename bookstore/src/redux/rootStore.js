import { combineReducers } from "redux";
import bookReducer from "./book/reducer";
import editReducer from "./bookEdit/reducer";
import filterReducer from "./filter/reducer";

const rootReducer = combineReducers({
  books: bookReducer,
  bookEdit: editReducer,
  filterBook: filterReducer,
});

export default rootReducer;
