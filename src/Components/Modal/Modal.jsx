import React from "react";
import Products from "../Products/Products";
import "./Modal.css";
import ModalItem from "./ModalItem";

export default function Modal({products}) {
  return (
    <div className="Modal">
      {products.map((item) => (
        <ModalItem
          {...item}
          key={item.id}
        
        />
      ))}
    </div>
  );
}
