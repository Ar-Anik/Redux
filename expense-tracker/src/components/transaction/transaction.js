import { useEffect } from "react";
import Transaction from "./transactions";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../features/transactions/transactionSlice";

const Transactions = () => {
  const dispatch = useDispatch();
  const { isLoading, transactions, isError, error } = useSelector(
    (state) => state.transaction
  );

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  let components;

  if (isLoading)
    components = (
      <p style={{ textAlign: "center", color: "blue" }}>Loading...</p>
    );
  else if (!isLoading && isError && error)
    components = (
      <p style={{ color: "red", paddingLeft: "20px" }}>Something is Wrong!</p>
    );
  else if (!isLoading && !isError && error === "" && transactions?.length === 0)
    components = (
      <p style={{ color: "red", paddingLeft: "20px" }}>
        No Transactions Found!
      </p>
    );
  else if (!isLoading && !isError && error === "" && transactions?.length > 0)
    components = transactions.map((transaction) => (
      <Transaction key={transaction.id} transaction={transaction} />
    ));

  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{components}</ul>
      </div>
    </>
  );
};

export default Transactions;
