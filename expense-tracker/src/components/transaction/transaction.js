import Transactions from "./transactions";

const Transaction = () => {
  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>
          <Transactions />
        </ul>
      </div>
    </>
  );
};

export default Transaction;
