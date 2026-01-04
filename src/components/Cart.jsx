import React from "react";
import CartItem from "./CartItem";

function Cart({
  cartItems,
  removeFromCart,
  increaseQty,
  decreaseQty,
}) {
  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />
        ))
      )}
    </div>
  );
}

export default Cart;
