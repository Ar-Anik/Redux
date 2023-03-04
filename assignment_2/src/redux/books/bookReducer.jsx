import { ADD, DELETE } from "./actionTypes";

const initialState = {
  books: [],
};

const BookReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD:
      return {
        ...state,
        books: state.books.push(actions.payload),
      };
    case DELETE:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== actions.payload.id),
      };
    default:
      return state;
  }
};

export default BookReducer;
