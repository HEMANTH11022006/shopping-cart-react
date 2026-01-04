import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList({ addToCart }) {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
