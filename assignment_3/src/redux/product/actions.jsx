import { PRODUCTADDED, PRODUCTADD, PRODUCTSUB } from "./actionType";

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

export { productAdded, productAdd, productSub };
