import React from "react";
import "./ModalItem.css";

export default function ModalItem({
  id,
  image,
  title,
  price,
  itemCount,
  changeItemCount,
  deleteItemFromCart,
}) {
  return (
    <div className="Wrapper" key={id}>
      <img src={image} alt="image" className="modal-item" />
      <div className="title">{title.slice(0, 12)}...</div>
      <div className="price">$ {price.toFixed(2)}</div>

      <div className="Counter">
        <button
          onClick={() => {
            changeItemCount(id, -1);
          }}
        >
          -
        </button>
        <div>
          <p>Total Count: {itemCount} </p>
          <div> Total Cost: {(price * itemCount).toFixed(2)}</div>
        </div>
        <button
          onClick={() => {
            changeItemCount(id, 1);
          }}
        >
          +
        </button>
        <img
          className="trash"
          src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627249-delete3-512.png"
          alt="trash"
          onClick={() => deleteItemFromCart(id)}
        />
      </div>
    </div>
  );
}
