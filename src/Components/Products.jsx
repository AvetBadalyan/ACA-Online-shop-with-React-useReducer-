import React from "react";
import Product from "./Product";
import "./Products.css"

function Products({ state }) {
  return (
    <div className="All-products">
      {state.map((el) => {
        return <Product key={el.id} element={{ ...el, totalCount: 0 }} />;
      })}
    </div>
  );
}

export default Products;
