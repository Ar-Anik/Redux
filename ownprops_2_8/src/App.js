import Counter from "../src/components/counter";
import HookCounter from "./components/hookCounter";
import DynamicHookCounter from "./components/dynamicHookCounter";

function App() {
  return (
    <>
      <Counter />
      <Counter dynamic={true} />

      <hr />

      <HookCounter />

      <hr />

      <DynamicHookCounter />
    </>
  );
}

export default App;
