import {
  PRODUCTADDED,
  PRODUCTADD,
  PRODUCTSUB,
  ADDAFTERDELETE,
} from "./actionType";

const productAdded = (productName, category, imgUrl, price, quantity) => {
  return {
    type: PRODUCTADDED,
    payload: {
      productName,
      category,
      imgUrl,
      price,
      quantity,
    },
  };
};

const productAdd = (id) => {
  return {
    type: PRODUCTADD,
    payload: id,
  };
};

const productSub = (id) => {
  return {
    type: PRODUCTSUB,
    payload: id,
  };
};

const productAddAfterDelete = (id, quantity) => {
  return {
    type: ADDAFTERDELETE,
    payload: {
      id: id,
      quantity: quantity,
    },
  };
};

export { productAdded, productAdd, productSub, productAddAfterDelete };
