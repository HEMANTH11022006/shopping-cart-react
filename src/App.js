import React, { useState } from "react";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import "./styles/main.css";

function App() {
  // Cart State
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Add product to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1 },
      ]);
    }
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="App">
      {/* Toggle Button */}
      <button
        className="cart-toggle-btn"
        onClick={() => setShowCart(!showCart)}
      >
        {showCart ? "Go to Shop" : `Cart (${cartItems.length})`}
      </button>

      {/* Conditional Rendering */}
      {showCart ? (
        <CartPage
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />
      ) : (
        <Home addToCart={addToCart} />
      )}
    </div>
  );
}

export default App;
