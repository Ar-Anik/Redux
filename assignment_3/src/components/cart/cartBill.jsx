const CartBill = () => {
  return (
    <div>
      <div class="billDetailsCard">
        <h4 class="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <p>Sub Total</p>
            <p>
              BDT <span class="lws-subtotal">8800</span>
            </p>
          </div>
          <div class="flex items-center justify-between">
            <p>Discount</p>
            <p>
              BDT <span class="lws-discount">0</span>
            </p>
          </div>
          <div class="flex items-center justify-between">
            <p>VAT</p>
            <p>
              BDT <span class="vat">0</span>
            </p>
          </div>
          <div class="flex items-center justify-between pb-4">
            <p class="font-bold">TOTAL</p>
            <p class="font-bold">
              BDT <span class="lws-total">8800</span>
            </p>
          </div>
          <button class="placeOrderbtn">place order</button>
        </div>
      </div>
    </div>
  );
};

export default CartBill;
