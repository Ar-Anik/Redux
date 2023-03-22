const CartItem = () => {
  return (
    <div class="space-y-6">
      <div class="cartCard">
        <div class="flex items-center col-span-6 space-x-6">
          <img
            class="lws-cartImage"
            src="https://i.dummyjson.com/data/products/40/thumbnail.jpg"
            alt="product"
          />
          <div class="space-y-2">
            <h4 class="lws-cartName">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
            </h4>
            <p class="lws-cartCategory">Men's clothing</p>
            <p>
              BDT <span class="lws-cartPrice">1100</span>
            </p>
          </div>
        </div>
        <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          <div class="flex items-center space-x-4">
            <button class="lws-incrementQuantity">
              <i class="text-lg fa-solid fa-plus"></i>
            </button>
            <span class="lws-cartQuantity">2</span>
            <button class="lws-decrementQuantity">
              <i class="text-lg fa-solid fa-minus"></i>
            </button>
          </div>
          <p class="text-lg font-bold">
            BDT <span class="lws-calculatedPrice">2200</span>
          </p>
        </div>
        <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button class="lws-removeFromCart">
            <i class="text-lg text-red-400 fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
