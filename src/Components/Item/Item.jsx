import React from 'react'
import "./Item.css"
import Products from '../Products/Products';

export default function Item( {id, price, title, image }) {
  return (
    <div className="Wrapper">
      <img src={image} alt="image" width="250px" height="300px" />
      <div className="title">{title.slice(0, 12)}...</div>
      <div className="price">$ {price.toFixed(2)}</div>
      <p>Total Count: </p>
      <div>
        <button >-</button>
        <button >+</button>
      </div>
    </div>
  );
}
