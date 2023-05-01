import { EDITOPEN, EDITCLOSE } from "./actionType";

const editOpen = (bookId, book) => {
  return {
    type: EDITOPEN,
    payload: {
      bookId: bookId,
      book: book,
    },
  };
};

const editClose = () => {
  return {
    type: EDITCLOSE,
  };
};

export { editOpen, editClose };
