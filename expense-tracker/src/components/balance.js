import { useSelector } from "react-redux";
import MoneyFormatter from "../utils/moneyFormatter";

const Balance = () => {
  const { transactions } = useSelector((state) => state.transaction);

  const Calculation = (transactions) => {
    let total = Number(0);
    transactions.forEach((transaction) => {
      const { type, amount } = transaction;
      if (type === "income") {
        total += Number(amount);
      } else {
        total -= Number(amount);
      }
    });

    return total;
  };

  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>{" "}
        <span>
          {transactions?.length > 0
            ? MoneyFormatter(Calculation(transactions))
            : MoneyFormatter(0)}
        </span>
      </h3>
    </div>
  );
};

export default Balance;
