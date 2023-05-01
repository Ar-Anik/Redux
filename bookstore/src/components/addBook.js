import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookAdd from "../redux/book/thunk/bookAdd";
import UpdateBook from "../redux/bookEdit/thunk/updateBook";

const AddBook = () => {
  const editData = useSelector((state) => state.bookEdit);

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    const { bookId, book } = editData;
    if (bookId !== 0) {
      setName(book.name);
      setAuthor(book.author);
      setThumbnail(book.thumbnail);
      setPrice(book.price);
      setRating(book.rating);
      setFeatured(book.featured);
    }
  }, [editData]);

  const dispatch = useDispatch();

  return (
    <>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        {editData.bookId === 0 && (
          <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        )}
        {editData.bookId > 0 && (
          <h4 className="mb-8 text-xl font-bold text-center">
            Update Book Data
          </h4>
        )}
        <form
          className="book-form"
          onSubmit={(event) => {
            event.preventDefault();
            if (editData.bookId === 0) {
              dispatch(
                BookAdd(name, author, thumbnail, price, rating, featured)
              );
            } else {
              dispatch(
                UpdateBook(
                  editData.bookId,
                  name,
                  author,
                  thumbnail,
                  price,
                  rating,
                  featured
                )
              );
            }

            setName("");
            setAuthor("");
            setThumbnail("");
            setPrice("");
            setRating("");
            setFeatured(false);
          }}
        >
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={thumbnail}
              onChange={(event) => setThumbnail(event.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={featured}
              onChange={() => setFeatured(!featured)}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              This is a featured book
            </label>
          </div>

          {editData.bookId === 0 && (
            <button type="submit" className="submit" id="submit">
              Add Book
            </button>
          )}

          {editData.bookId > 0 && (
            <button type="submit" className="submit" id="submit">
              Update Book
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default AddBook;
