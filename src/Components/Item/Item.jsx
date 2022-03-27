import React from "react";
import "./Item.css";
import Cart from "../../Assets/cart.svg";

export default function Item({ price, title, image, id, itemCount }) {
  const modalProduct = {
    title: title,
    price: price,
    id: id,
    image: image,
    itemCount: itemCount,
  };

  return (
    <div className="Wrapper" key={id}>
      <img src={image} alt="image" className="item-image" />
      <div className="title">{title.slice(0, 12)}...</div>
      <div className="price">$ {price.toFixed(2)}</div>

      <img src={Cart} alt="cart" width="30px" height="30px" />
      {itemCount > 0 && (
        <div className="Counter">
          <button className="button">-</button>
          <div>
            <p>Total Count: </p>
          </div>
          <button className="button">+</button>
        </div>
      )}
    </div>
  );
}
