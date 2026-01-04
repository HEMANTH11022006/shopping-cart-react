import React from "react";

function CartItem({ item, removeFromCart, increaseQty, decreaseQty }) {
  return (
    <div className="cart-item">
      <div>
        <h4>{item.name}</h4>
        <p>₹{item.price}</p>
      </div>

      <div>
        <button onClick={() => decreaseQty(item.id)}>-</button>
        <span style={{ margin: "0 8px" }}>{item.quantity}</span>
        <button onClick={() => increaseQty(item.id)}>+</button>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
