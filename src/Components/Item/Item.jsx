import React from "react";
import { ACTION_TYPES } from "../../App";
import "./Item.css";
import Cart from "../../Assets/cart.svg";

function Counter({ count = 0, dispatch, id }) {
  const addCount = () => {
    dispatch({ type: ACTION_TYPES.COUNTER_CHANGE_HANDLER, id, count: +1 });
  };

  const subCount = () => {
    dispatch({ type: ACTION_TYPES.COUNTER_CHANGE_HANDLER, id, count: -1 });
  };

  return (
    <div className="Counter">
      <button onClick={subCount}>-</button>
      <div>{count}</div>
      <button onClick={addCount}>+</button>
    </div>
  );
}

export default function Item({ id, price, title, image, count, dispatch }) {

    const cartClickHandler = () => {
dispatch({ type: ACTION_TYPES.COUNTER_CHANGE_HANDLER, id, count: +1 });        
    }
  return (
    <div className="Wrapper">
      <img src={image} alt="image" width="250px" height="300px" />
      <div className="title">{title.slice(0, 12)}...</div>
      <div className="price">$ {price.toFixed(2)}</div>
      {count <= 0 ? (
        <img
          onClick={cartClickHandler}
          src={Cart}
          alt="cart"
          width="30px"
          height="30px"
        />
      ) : (
        <Counter dispatch={dispatch} count={count} id={id} />
      )}

      <p>Total Count: </p>
    </div>
  );
}
