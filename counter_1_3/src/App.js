import { useState } from "react";
import Counter from "./components/counter";
import States from "./components/states";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

function App() {
  const [state, setState] = useState(initialState);

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  };

  const increment = (id) => {
    const updateCounter = state.map((cnt) => {
      if (cnt.id === id) {
        return {
          ...cnt,
          count: cnt.count + 1,
        };
      } else {
        return { ...cnt };
      }
    });

    setState(updateCounter);
  };

  const decrement = (id) => {
    const updateCounter = state.map((cnt) => {
      if (cnt.id === id) {
        return {
          ...cnt,
          count: cnt.count - 1,
        };
      } else {
        return { ...cnt };
      }
    });

    setState(updateCounter);
  };

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {state.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            count={counter.count}
            increment={increment}
            decrement={decrement}
          />
        ))}

        <States count={totalCount()} />
      </div>
    </div>
  );
}

export default App;
