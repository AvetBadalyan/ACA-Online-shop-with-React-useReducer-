import React, { useState } from "react";
import "./Header.css";
import CartLogo from "./../../assets/cart.svg";

export default function Header({ cartOpenHandler, cartCount }) {
  return (
    <div>
      <header className="header">
        <h1 className="AvetStore">Avet Store</h1>
        <div className="CartLogo">
          <img
            onClick={cartOpenHandler}
            src={CartLogo}
            alt=""
            width="50px"
            height="50px"
          />
          <span className="cartCount"> {cartCount} </span>
        </div>
      </header>
    </div>
  );
}
