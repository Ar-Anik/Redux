import { increment, decrement } from "../redux/counter/actions";
import { dincrement, ddecrement } from "../redux/dynamicCouter/actionTypes";
import { connect } from "react-redux";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{count}</div>
        <div className="flex space-x-3">
          <button
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            onClick={() => increment(5)}
          >
            Increment
          </button>
          <button
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
            onClick={() => decrement(2)}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.dynamic
      ? (value) => dispatch(dincrement(value))
      : () => dispatch(increment()),
    decrement: ownProps.dynamic
      ? (value) => dispatch(ddecrement(value))
      : () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
