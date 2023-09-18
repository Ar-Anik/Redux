import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postTransaction,
  patchTransaction,
  removeEditingObject,
} from "../features/transactions/transactionSlice";

const Form = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [modify, setModify] = useState(false);

  const dispatch = useDispatch();
  const { isLoading, isError, editingObject } = useSelector(
    (state) => state.transaction
  );

  useEffect(() => {
    if (editingObject.id) {
      setModify(true);
      setName(editingObject.name);
      setType(editingObject.type);
      setAmount(editingObject.amount);
    } else {
      reset();
      setModify(false);
    }
  }, [editingObject]);

  const reset = () => {
    setName("");
    setType("");
    setAmount("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      postTransaction({
        name,
        type,
        amount: Number(amount),
      })
    ).then(() => reset());
  };

  const handleEditing = (event) => {
    event.preventDefault();
    const editId = editingObject?.id;
    const data = {
      name,
      type,
      amount,
    };
    dispatch(patchTransaction({ editId, data })).then(() => {
      dispatch(removeEditingObject());
    });
    reset();
  };

  const handleCancelEditing = () => {
    dispatch(removeEditingObject());
    reset();
  };

  return (
    <div className="form">
      <h3>Add New Transaction</h3>

      <form onSubmit={modify ? handleEditing : handleSubmit}>
        <div className="form-group">
          <label htmlFor="transaction_name">Name</label>
          <input
            type="text"
            name="transaction_name"
            required
            value={name}
            placeholder="Income or Expense Name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-group radio">
          <label htmlFor="transaction_type">Type</label>
          <div className="radio_group">
            <input
              type="radio"
              value="income"
              required
              name="transaction_type"
              checked={type === "income"}
              onChange={() => setType("income")}
            />
            <label htmlFor="transaction_type">Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="transaction_type"
              checked={type === "expense"}
              onChange={() => setType("expense")}
            />
            <label htmlFor="transaction_type">Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="transaction_amount">Amount</label>
          <input
            type="number"
            value={amount}
            required
            placeholder="Enter Amount"
            name="transaction_amount"
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>

        <button className="btn" type="submit" disabled={isLoading}>
          {modify ? "Update Transaction" : "Add Transaction"}
        </button>

        {!isLoading && isError && <p>There was an error occure</p>}
      </form>
      {modify && (
        <button className="btn cancel_edit" onClick={handleCancelEditing}>
          Cancel Edit
        </button>
      )}
    </div>
  );
};

export default Form;
