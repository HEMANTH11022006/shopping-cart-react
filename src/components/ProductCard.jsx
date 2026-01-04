import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      {/* Product Image */}
      <img src={product.image} alt={product.name} />

      {/* Product Details */}
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      {/* Add to Cart Button */}
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
