import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // 1. Import Context
import "./Nav.css";

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 2. Get the real cart from Context
  // If context is missing/undefined, default to empty array to prevent crash
  const { cart } = useContext(CartContext) || { cart: [] }; 
  const cartCount = cart.length; // 3. Calculate dynamic count

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        
        {/* Logo */}
        <Link to="/" className="nav-logo">
          BookNook<span>.</span>
        </Link>

        {/* Desktop Links */}
        <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <Link to="/" className={location.pathname === "/" ? "active-link" : ""} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/books" className={location.pathname === "/books" ? "active-link" : ""} onClick={() => setMobileMenuOpen(false)}>Collection</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active-link" : ""} onClick={() => setMobileMenuOpen(false)}>Our Story</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active-link" : ""} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          
          <div className="mobile-actions">
            {user ? (
              <button onClick={handleLogout} className="mobile-auth-btn">Logout</button>
            ) : (
              <Link to="/login" className="mobile-auth-btn" onClick={() => setMobileMenuOpen(false)}>Login</Link>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="nav-actions">
          
          {/* Cart Icon */}
          <Link to="/cart" className="cart-icon">
            <span className="icon">🛒</span>
            {/* 4. Only show badge if count > 0 */}
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          {/* User Menu */}
          {user ? (
            <div className="user-dropdown">
              <span className="user-greeting">Hi, {user.name ? user.name.split(" ")[0] : "Reader"}</span>
              <button onClick={handleLogout} className="logout-btn-desktop">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="login-btn-desktop">Sign In</Link>
          )}

          {/* Mobile Hamburger */}
          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

      </div>
    </nav>
  );
}