import "./style/App.css";
import Navbar from "./components/navbar";
import ProductContainer from "./components/product/productContainer";
import ProductInput from "./components/product/productInput";
import Cart from "./components/cart/cart";

function App() {
  return (
    <>
      <Navbar />

      {/* <main className="py-16">
        <div className="productWrapper">
          <ProductContainer />
          <ProductInput />
        </div>
      </main> */}

      <Cart />
    </>
  );
}

export default App;
