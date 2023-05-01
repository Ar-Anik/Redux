import { useDispatch, useSelector } from "react-redux";
import Book from "./book";
import { useEffect } from "react";
import fetchBook from "../redux/book/thunk/fetchBook";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const filterState = useSelector((state) => state.filterBook);
  const dispatch = useDispatch();

  const { status, search } = filterState;

  useEffect(() => {
    dispatch(fetchBook);
  }, [dispatch]);

  return (
    <>
      <div className="lws-bookContainer">
        {books
          .filter((book) => {
            switch (status) {
              case "Featured":
                return book.featured;
              default:
                return true;
            }
          })
          .filter((book) => {
            if (
              book.name.toLowerCase().includes(search.toLowerCase()) ||
              search === ""
            ) {
              return book;
            } else {
              return false;
            }
          })
          .map((book) => (
            <Book book={book} key={book.id} />
          ))}
      </div>
    </>
  );
};

export default BookList;
