import React from "react";
import "./Modal.css";
import ModalItem from "./ModalItem";

export default function Modal({
  products,
  changeItemCount,
  deleteItemFromCart,
  emptyCart,
}) {
  return (
    <div className="Modal">
      <p> Empty the Cart </p>
      <img
        className="trash"
        src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627249-delete3-512.png"
        alt="trash"
        onClick={emptyCart}
      />
      {products.map((item) => (
        <ModalItem
          {...item}
          key={item.id}
          changeItemCount={changeItemCount}
          deleteItemFromCart={deleteItemFromCart}
        />
      ))}
    </div>
  );
}
