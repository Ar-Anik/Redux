import { DELETE, ADD } from "./actionTypes";

const addbook = (id, from, to, date, guests, cls) => {
  return {
    type: ADD,
    payload: {
      ID: id,
      From: from,
      To: to,
      Date: date,
      Guests: guests,
      Clss: cls,
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
