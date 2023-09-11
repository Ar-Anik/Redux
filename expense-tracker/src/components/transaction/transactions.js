import editImage from "../images/edit.svg";
import deleteImage from "../images/delete.svg";
import { addEditingObject } from "../../features/transactions/transactionSlice";
import { useDispatch } from "react-redux";

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

  return (
    <li className="transaction income">
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link" onClick={handleEditing}>
          <img className="icon" src={editImage} alt="Edit" />
        </button>
        <button className="link">
          <img className="icon" src={deleteImage} alt="Delete" />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
