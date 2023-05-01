import { editBook } from "../../book/actions";
import { editClose } from "../actions";

const UpdateBook = (id, name, author, thumbnail, price, rating, featured) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        author: author,
        thumbnail: thumbnail,
        price: price,
        rating: rating,
        featured: featured,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const book = await response.json();

    dispatch(
      editBook(
        book.id,
        book.name,
        book.author,
        book.thumbnail,
        book.price,
        book.rating,
        book.featured
      )
    );
    dispatch(editClose());
  };
};

export default UpdateBook;
