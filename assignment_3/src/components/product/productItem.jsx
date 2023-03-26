import { useDispatch } from "react-redux";
import { added } from "../../redux/cart/actions";
import { productSub } from "../../redux/product/actions";

const ProductItem = (product) => {
  const { id, name, category, imageUrl, price, quantity } = product.product;
  const dispatch = useDispatch();

  const handleAdd = (id, name, category, imageUrl, price, quantity) => {
    dispatch(added(id, name, category, imageUrl, price, quantity));
    dispatch(productSub(id));
  };

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={imageUrl} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          className="lws-btnAddToCart"
          onClick={() =>
            handleAdd(id, name, category, imageUrl, price, quantity)
          }
          disabled={!quantity}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
