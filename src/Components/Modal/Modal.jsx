import React from "react";
import "./Modal.css";
import ModalItem from "./ModalItem";

export default function Modal({cartState}) {
  return (
    <div className="Modal">
    {cartState.map((item) => <ModalItem {...item} key={item.id}/> )};
    </div> 
  );
}
