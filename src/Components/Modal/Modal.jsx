import React from "react";
import "./Modal.css";
import ModalItem from "./ModalItem";

export default function Modal({
  cartState,
  addModalCount,
  subModalCount,
  emptyModal,
}) {
  return (
    <div className="Modal">
      {cartState.map((item) => (
        <ModalItem
          {...item}
          key={item.id}
          addModalCount={addModalCount}
          subModalCount={subModalCount}
          emptyModal={emptyModal}
        />
      ))}
    </div>
  );
}
