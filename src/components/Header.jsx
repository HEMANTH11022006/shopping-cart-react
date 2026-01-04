import React from "react";

function Header({ cartCount, toggleCart }) {
  return (
    <header
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "6px",
        marginBottom: "20px",
      }}
    >
      {/* Logo / Title */}
      <h2>🛒 MyShop</h2>

      {/* Cart Button */}
      <button
        onClick={toggleCart}
        style={{
          backgroundColor: "#fff",
          color: "#000",
          border: "none",
          padding: "8px 14px",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Cart ({cartCount})
      </button>
    </header>
  );
}

export default Header;
