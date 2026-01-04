import React from "react";
import CartItem from "../components/CartItem";

function CartPage({
  cartItems,
  removeFromCart,
  increaseQty,
  decreaseQty,
}) {
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          ))}

          <div className="total">
            Total: ₹{totalPrice}
          </div>
          <div style={{ textAlign: "right", marginTop: "15px" }}>
      <button
        style={{
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          padding: "10px 18px",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => alert("Order placed successfully!")}
      >
        Buy Now
      </button>
    </div>
        </>
        
      )}
    </div>
  );
}

export default CartPage;
