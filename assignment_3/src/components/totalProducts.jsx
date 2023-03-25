/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";

const TotalProduct = () => {
  const products = useSelector((state) => state.carts);

  let totalProduct = Number(0);

  const total = products.map((product) => {
    totalProduct = totalProduct + Number(product.quantity);
    return product;
  });

  return totalProduct;
};

export default TotalProduct;
