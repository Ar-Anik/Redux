import "./style/App.css";
import Navbar from "./components/navbar";
import Product from "./components/product/Product";
import Cart from "./components/cart/cart";

function App() {
  return (
    <>
      <Navbar />

      <Product />

      <Cart />
    </>
  );
}

export default App;
