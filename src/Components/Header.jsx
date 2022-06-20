import React from "react";
import "../Components/header.css";
import Cart from "./Cart";

function Header() {
  return (
    <div className="header">
      <h1>Avet Store</h1>
      <div className="cart">
        <button onClick={<Cart />}> Cart </button>
      </div>
    </div>
  );
}

export default Header;
