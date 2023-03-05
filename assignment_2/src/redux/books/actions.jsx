import { DELETE, ADD } from "./actionTypes";

const addbook = (id, from, to, date, guests, clss) => {
  return {
    type: ADD,
    payload: {
      id: id,
      from: from,
      to: to,
      date: date,
      guest: guests,
      clss: clss,
    },
  };
};

const deletebook = (id) => {
  return {
    type: DELETE,
    payload: {
      id: id,
    },
  };
};

export { addbook, deletebook };
