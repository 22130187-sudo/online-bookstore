import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Column 1: Brand & Social */}
        <div className="footer-col brand-col">
          <h2 className="footer-logo">BookNook.</h2>
          <p className="footer-desc">
            Curating stories that make your heart flutter. 
          </p>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
          </div>
        </div>

        {/* Column 2: Shop */}
        <div className="footer-col">
          <h3>Shop</h3>
          <ul className="footer-links">
            <li><Link to="/books">All Books</Link></li>
            <li><Link to="/books?cat=new">New Arrivals</Link></li>
            <li><Link to="/cart">My Cart</Link></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul className="footer-links">
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/login">Member Login</Link></li>
          </ul>
        </div>

      </div>

      {/* The Bottom Bar */}
      <div className="footer-bottom">
        <div className="copyright">
          &copy; {new Date().getFullYear()} BookNook Inc.
        </div>
        <div className="designer-credit">
          Designed with 💖
        </div>
      </div>
    </footer>
  );
}