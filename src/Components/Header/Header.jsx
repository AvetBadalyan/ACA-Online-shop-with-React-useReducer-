import React from 'react'
import Cart from '../Cart_Modal/Cart'
import "./Header.css"
import CartLogo from "../../Assets/cart.svg"

export default function Header() {
  return (
    <div>
      <header className="header">
        <></>
        <h1 className='AvetStore'>Avet Store</h1>
        <div className="CartLogo">
          <img src={CartLogo} alt="" width="50px" height="50px" />
        </div>

        <Cart />
      </header>
    </div>
  );
}