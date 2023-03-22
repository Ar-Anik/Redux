import ProductInput from "./productInput";
import ProductContainer from "./productContainer";

const Product = () => {
  return (
    <main className="py-16">
      <div className="productWrapper">
        <ProductContainer />
        <ProductInput />
      </div>
    </main>
  );
};

export default Product;
