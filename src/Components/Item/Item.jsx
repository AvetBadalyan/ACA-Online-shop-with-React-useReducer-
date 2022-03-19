import React from "react";
import "./Item.css";
import Cart from "../../Assets/cart.svg";

// function Counter({ }) {
// const addCount = () => {};

/// const subCount = () => {};

// return (
//  <div className="Counter">
//     <button onClick={subCount}>-</button>
//     <div></div>
//   <button onClick={addCount}>+</button>
//  </div>
// );
//}

export default function Item({ price, title, image, totalCount, id }) {
  return (
    <div className="Wrapper">
      <img src={image} alt="image" width="250px" height="300px" />
      <div className="title">{title.slice(0, 12)}...</div>
      <div className="price">$ {price.toFixed(2)}</div>
      <img src={Cart} alt="cart" width="30px" height="30px" />

      <p>Total Count: </p>
    </div>
  );
}
