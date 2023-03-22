import "../../style/cart.css";
import CartContainer from "./cartContainer";

const Cart = () => {
  return (
    <>
      <main class="py-16">
        <div class="container 2xl:px-8 px-2 mx-auto">
          <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
          <CartContainer />
        </div>
      </main>
    </>
  );
};

export default Cart;
