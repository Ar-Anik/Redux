import "./style/App.css";
import Navbar from "./components/navbar";
import Product from "./components/product/Product";
import Cart from "./components/cart/cart";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
