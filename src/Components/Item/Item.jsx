import React from 'react'
import { ACTION_TYPES } from '../../App';
import "./Item.css"

function Counter({ count = 0, dispatch, id }) {
    const addCount = () => {
dispatch ({type: ACTION_TYPES.COUNTER_ADD_HANDLER, id })
    }

    return (
      <div className='Counter'>
        <button>-</button>
        <div>{count}</div>
        <button onClick={addCount}>+</button>
      </div>
    );
}

export default function Item({ id, price, title, image, count, dispatch }) {
  return (
    <div className="Wrapper">
      <img src={image} alt="image" width="250px" height="300px" />
      <div className="title">{title.slice(0, 12)}...</div>
      <div className="price">$ {price.toFixed(2)}</div>
      <Counter dispatch={dispatch} count={count} id={id} />
      <p>Total Count: </p>
    </div>
  );
}
