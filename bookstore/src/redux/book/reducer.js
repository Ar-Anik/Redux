import initialState from "./initialState";
import { ADD, DELETE, EDIT, LOADED } from "./actionType";

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          author: action.payload.author,
          thumbnail: action.payload.thumbnail,
          price: action.payload.price,
          rating: action.payload.rating,
          featured: action.payload.featured,
        },
      ];

    case LOADED:
      return [...state, ...action.payload];

    case EDIT:
      const editBook = state.map((book) => {
        if (book.id === action.payload.id) {
          return {
            ...book,
            name: action.payload.name,
            author: action.payload.author,
            thumbnail: action.payload.thumbnail,
            price: action.payload.price,
            rating: action.payload.rating,
            featured: action.payload.featured,
          };
        } else {
          return book;
        }
      });

      return editBook;

    case DELETE:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default bookReducer;
