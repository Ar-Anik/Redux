import PRODUCTADD from "./actionType";

const productAdd = (productName, category, imgUrl, price, quantity) => {
  return {
    type: PRODUCTADD,
    payload: {
      productName,
      category,
      imgUrl,
      price,
      quantity,
    },
  };
};

export default productAdd;
