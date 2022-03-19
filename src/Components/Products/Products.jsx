import React from "react";
import Item from "../Item/Item";
import "./Products.css";

export default function Products({ products, dispatch }) {
  return (
    <div className="All-Products">
      {products.map((product) => (
        <Item dispatch={dispatch} {...product} key={product.id} />
      ))}
    </div>
  );
}
