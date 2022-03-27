import React from "react";
import "./ModalItem.css";

export default function ModalItem({
  id,
  image,
  title,
  price
}) {
  return (
    <div className="Wrapper" key={id}>
      <img src={image} alt="image" className="modal-item" />
      <div className="title">{title.slice(0, 12)}...</div>
      <div className="price">$ {price.toFixed(2)}</div>

      <div className="Counter">
        <button
          onClick={() => {
            subModalCount(id);
          }}
        >
          -
        </button>
        <div>
          <p>Total Count: {totalCount} </p>
          <div> Total Cost: {(price * totalCount).toFixed(2)}</div>
        </div>
        <button
          onClick={() => {
            addModalCount(id);
          }}
        >
          +
        </button>
        <img
          className="trash"
          onClick={() => {
            emptyModal(id);
          }}
          src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627249-delete3-512.png"
          alt="trash"
        />
      </div>
    </div>
  );
}
