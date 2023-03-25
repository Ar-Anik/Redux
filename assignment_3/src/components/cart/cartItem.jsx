import { useDispatch, useSelector } from "react-redux";
import { add, sub, deleted } from "../../redux/cart/actions";
import { productAdd, productSub } from "../../redux/product/actions";

const CartItem = (cart) => {
  const { id, name, category, imageUrl, price, quantity, total } = cart.cart;
  const products = useSelector((state) => state.products);
  const product = products.filter((product) => product.id === id);
  const totalQuantity = quantity + product[0].quantity;

  const dispatch = useDispatch();

  const handleAdd = (id) => {
    if (totalQuantity > quantity) {
      dispatch(add(id));
      dispatch(productSub(id));
    }
  };

  const handleSub = (id) => {
    if (quantity > 1) {
      dispatch(sub(id));
      dispatch(productAdd(id));
    } else if (quantity === 1) {
      dispatch(sub(id));
      dispatch(productAdd(id));
      dispatch(deleted(id));
    }
  };

  const handleDeleted = (id) => {
    dispatch(deleted(id));
  };

  return (
    <>
      <div className="space-y-6">
        <div className="cartCard">
          <div className="flex items-center col-span-6 space-x-6">
            <img className="lws-cartImage" src={imageUrl} alt="product" />
            <div className="space-y-2">
              <h4 className="lws-cartName">{name}</h4>
              <p className="lws-cartCategory">{category}</p>
              <p>
                BDT <span className="lws-cartPrice">{price}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
            <div className="flex items-center space-x-4">
              <button
                className="lws-incrementQuantity"
                onClick={() => handleAdd(id)}
              >
                <i className="text-lg fa-solid fa-plus"></i>
              </button>
              <span className="lws-cartQuantity">{quantity}</span>
              <button
                className="lws-decrementQuantity"
                onClick={() => handleSub(id)}
              >
                <i className="text-lg fa-solid fa-minus"></i>
              </button>
            </div>
            <p className="text-lg font-bold">
              BDT <span className="lws-calculatedPrice">{total}</span>
            </p>
          </div>
          <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
            <button
              className="lws-removeFromCart"
              onClick={() => handleDeleted(id)}
            >
              <i className="text-lg text-red-400 fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default CartItem;
