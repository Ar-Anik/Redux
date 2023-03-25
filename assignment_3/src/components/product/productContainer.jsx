import { useSelector } from "react-redux";
import ProductItem from "./productItem";

const ProductContainer = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="productContainer" id="lws-productContainer">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductContainer;
