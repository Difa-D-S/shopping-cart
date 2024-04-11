import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assests/img3.jpeg";
import "./Header.module.css";
import { useCart } from "../context/CartContext";

export const Header = () => {

  const {cartList} = useCart();
  return (
    <header>
      <Link to="/" className="logo link nav-link">
        <img src={logo} alt="Shopmate Logo" style={{maxWidth: "40px", marginRight: "5px"}} />
        <span>Shopping Cart</span>
      </Link>
      <div className="navigation" style={{display:"flex"}}>
        <NavLink to="/" className="link nav-link me-3" end>Home</NavLink>
        <NavLink to="/cart" className="link nav-link">Cart</NavLink>
      </div>
      <Link to="/cart" className="items link nav-link">
        <span>Cart: { cartList.length } </span>
      </Link>
    </header>
  );
};
