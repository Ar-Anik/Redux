import { EDITOPEN, EDITCLOSE } from "./actionType";
import initialState from "./initialState";

const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDITOPEN:
      console.log("IDDDD : ", action.payload);
      return {
        ...state,
        bookId: action.payload.bookId,
        editMode: true,
        book: action.payload.book,
      };

    case EDITCLOSE:
      return {
        ...state,
        bookId: 0,
        editMode: false,
        book: {},
      };

    default:
      return state;
  }
};

export default editReducer;
