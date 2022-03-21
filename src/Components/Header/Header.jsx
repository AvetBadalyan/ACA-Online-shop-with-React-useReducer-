import React, { useState } from "react";
import "./Header.css";
import CartLogo from "../../Assets/cart.svg";

export default function Header({ cartOpenHandler }) {
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
        </div>
      </header>
    </div>
  );
}
