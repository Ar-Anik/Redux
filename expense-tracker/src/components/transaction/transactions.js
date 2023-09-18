import editImage from "../images/edit.svg";
import deleteImage from "../images/delete.svg";
import {
  addEditingObject,
  removeTransaction,
} from "../../features/transactions/transactionSlice";
import { useDispatch } from "react-redux";
import MoneyFormatter from "../../utils/moneyFormatter";

const Transaction = ({ transaction }) => {
  const { id, name, type, amount } = transaction;
  const dispatch = useDispatch();

  const handleEditing = () => {
    dispatch(
      addEditingObject({
        id,
        name,
        type,
        amount,
      })
    );
  };

  const handleDelete = () => {
    dispatch(removeTransaction(id));
  };

  return (
    <li className="transaction income">
      <p>{name}</p>
      <div className="right">
        <p>৳ {MoneyFormatter(amount)}</p>
        <button className="link" onClick={handleEditing}>
          <img className="icon" src={editImage} alt="Edit" />
        </button>
        <button className="link">
          <img
            className="icon"
            src={deleteImage}
            alt="Delete"
            onClick={handleDelete}
          />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
