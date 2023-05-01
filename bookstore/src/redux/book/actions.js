import { ADD, DELETE, EDIT, LOADED } from "./actionType";

const loaded = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};

const addBook = (id, name, author, thumbnail, price, rating, featured) => {
  return {
    type: ADD,
    payload: {
      id: id,
      name: name,
      author: author,
      thumbnail: thumbnail,
      price: price,
      rating: rating,
      featured: featured,
    },
  };
};

const editBook = (id, name, author, thumbnail, price, rating, featured) => {
  return {
    type: EDIT,
    payload: {
      id: id,
      name: name,
      author: author,
      thumbnail: thumbnail,
      price: price,
      rating: rating,
      featured: featured,
    },
  };
};

const deleteBook = (bookId) => {
  return {
    type: DELETE,
    payload: bookId,
  };
};

export { loaded, addBook, editBook, deleteBook };
