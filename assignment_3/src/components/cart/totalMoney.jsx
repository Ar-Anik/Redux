import { useSelector } from "react-redux";

const TotalMoney = () => {
  const products = useSelector((state) => state.carts);

  let totalMoney = Number(0);

  // eslint-disable-next-line no-unused-vars
  const money = products.map((product) => {
    totalMoney = totalMoney + Number(product.total);
    return product;
  });

  return totalMoney;
};

export default TotalMoney;
