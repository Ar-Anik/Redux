import CartItem from "./cartItem";
import CartBill from "./cartBill";

const CartContainer = () => {
  return (
    <div class="cartListContainer">
      <CartItem />
      <CartBill />
    </div>
  );
};

export default CartContainer;
