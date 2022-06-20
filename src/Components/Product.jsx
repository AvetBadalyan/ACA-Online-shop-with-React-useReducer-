import React, { useState } from "react";
import "./Product.css";

function Product({ element }) {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(element.totalCount);

  const add = () => {
    setCount(count + 1);
    localStorage.setItem(
      `element ${element.id}, ${count + 1}`,
      JSON.stringify(element)
    );
  };

  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
      localStorage.removeItem(`element ${element.id}, ${count}`);
    }
  };

  return (
    <div className="Wrapper">
      <img src={element.image} alt="image" width="250px" height="300px" />
      <div className="title">{element.title.slice(0, 12)}...</div>
      <div className="price">$ {element.price.toFixed(2)}</div>
      <p>Total Count: {count} </p>
      <div>
        <button onClick={subtract}>-</button>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
}

export default Product;
