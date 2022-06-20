import React from "react";
import "./Item.css";
import Cart from "./../../assets/cart.svg";

export default function Item({
  price,
  title,
  image,
  id,
  itemCount,
  changeItemCount,
}) {
  return (
    <div className="item-Wrapper" key={id}>
      <img src={image} alt="image" className="item-image" />
      <div className="title">{title.slice(0, 12)}...</div>
      <div className="price">$ {price.toFixed(2)}</div>

      {itemCount === 0 ? (
        <img
          src={Cart}
          alt="cart"
          width="30px"
          height="30px"
          onClick={() => {
            changeItemCount(id, 1);
          }}
        />
      ) : (
        <div className="Counter">
          <button
            disabled={itemCount === 0}
            className="button"
            onClick={() => {
              changeItemCount(id, -1);
            }}
          >
            -
          </button>
          <div>
            <p>Total Count: {itemCount} </p>
          </div>
          <button
            className="button"
            onClick={() => {
              changeItemCount(id, 1);
            }}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
