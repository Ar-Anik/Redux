import { ADDED, ADD, SUB, DELETED } from "./actionTypes";

const added = (id, name, category, imageUrl, price, quantity) => {
  console.log("added: ", id, name, category, imageUrl, price, quantity);
  return {
    type: ADDED,
    payload: {
      id: id,
      name: name,
      category: category,
      imageUrl: imageUrl,
      price: price,
      quantity: quantity,
    },
  };
};

const add = (id) => {
  return {
    type: ADD,
    payload: id,
  };
};

const sub = (id) => {
  return {
    type: SUB,
    payload: id,
  };
};

const deleted = (id) => {
  return {
    type: DELETED,
    payload: id,
  };
};

export { added, add, sub, deleted };
