import React from "react";

export default function ModalItem({ id, image, title, price, totalCount }) {
  return (
    <div className="Wrapper" key={id}>
      <img src={image} alt="image" width="250px" height="300px" />
      <div className="title">{title.slice(0, 12)}...</div>
      <div className="price">$ {price.toFixed(2)}</div>
      <div className="Counter">
        <button >-</button>
        <div>
          <p>Total Count: {totalCount} </p>
        </div>
        <button>+</button>
      </div>
    </div>
  );
}
