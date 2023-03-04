import { createStore } from "redux";
import BookReducer from "./books/bookReducer";

const store = createStore(BookReducer);

export default store;
