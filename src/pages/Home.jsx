import React from "react";
import ProductList from "../components/ProductList";

function Home({ addToCart }) {
  return (
    <div>
      <h2>🛍️ Shop Products</h2>
      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default Home;
