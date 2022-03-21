import React from "react";
import Item from "../Item/Item";
import "./Products.css";

export default function Products({ products,  addCart, subCart }) {
  return (
    <div className="All-Products">
      {products.map((product) => (
        <Item
          {...product}
          key={product.id}
          addCart={addCart}
          subCart={subCart}
        />
      ))}
    </div>
  );
}
