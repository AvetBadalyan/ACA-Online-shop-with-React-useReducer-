import React from 'react'
import "./Item.css"

function Counter({count=0, dispatch, id}) {
    return (
      <div className='Counter'>
        <button>-</button>
        <div>{count}</div>
        <button>+</button>
      </div>
    );
}

export default function Item( {id, price, title, image }) {
  return (
    <div className="Wrapper">
      <img src={image} alt="image" width="250px" height="300px" />
      <div className="title">{title.slice(0, 12)}...</div>
          <div className="price">$ {price.toFixed(2)}</div>
          <Counter/> 
      <p>Total Count: </p>
    </div>
  );
}
