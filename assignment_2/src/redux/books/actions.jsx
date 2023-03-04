import { DELETE, ADD } from "./actionTypes";

const addbook = (id, from, to, date, guests, clss) => {
  return {
    type: ADD,
    payload: {
      ID: id,
      From: from,
      To: to,
      Date: date,
      Guests: guests,
      Clss: clss,
    },
  };
};

const deletebook = ({ id }) => {
  return {
    type: DELETE,
    payload: {
      id: id,
    },
  };
};

export { addbook, deletebook };
