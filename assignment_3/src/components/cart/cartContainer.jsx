import CartItem from "./cartItem";
import CartBill from "./cartBill";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const carts = useSelector((state) => state.carts);

  return (
    <div className="cartListContainer">
      {carts.map((cart) => (
        <CartItem key={cart.id} cart={cart} />
      ))}
      <CartBill />
    </div>
  );
};

export default CartContainer;
