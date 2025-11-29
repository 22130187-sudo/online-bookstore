import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Your Favourite Bookstore</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}
