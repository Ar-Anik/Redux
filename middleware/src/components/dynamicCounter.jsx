import { useDispatch, useSelector } from "react-redux";
import { dincrement, ddecrement } from "../redux/dynamicCounter/actions";

const DynamicCounter = () => {
  const count = useSelector((state) => state.dynamic.value);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{count}</div>
        <div className="flex space-x-3">
          <button
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            onClick={() => dispatch(dincrement(5))}
          >
            Increment
          </button>
          <button
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
            onClick={() => dispatch(ddecrement(2))}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicCounter;
