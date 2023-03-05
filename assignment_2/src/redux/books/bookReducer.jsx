import { ADD, DELETE } from "./actionTypes";

const initialState = {
  books: [],
};

const BookReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case DELETE:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default BookReducer;
