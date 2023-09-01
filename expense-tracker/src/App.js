import React from "react";
import Layout from "./components/layout";
import Balance from "./components/balance";
import Form from "./components/form";
import Transaction from "./components/transaction/transaction";

function App() {
  return (
    <Layout>
      <Balance />
      <Form />
      <Transaction />
    </Layout>
  );
}

export default App;
