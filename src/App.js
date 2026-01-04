import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- COMPONENTS (Parts of a page) ---
import Nav from "./components/Nav"; 
import Footer from "./components/Footer"; 

// --- PAGES (Full views) ---
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart"; 
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

// --- CONTEXT PROVIDER ---
import { CartProvider } from "./context/CartContext";  // ✅ Default export, fixed

import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-wrapper">
          <Nav /> 
          
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
