// src/pages/BookDetails.js
import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import books from "../data/books";
import { CartContext } from "../context/CartContext";
import "./BookDetails.css";

export default function BookDetails() {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));
  const { addToCart, notification } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  if (!book) return <p>Book not found</p>;

  return (
    <div className="book-details-container">
      {notification && <div className="cart-popup">{notification}</div>}

      <div className="book-details-card">
        <img src={book.image} alt={book.title} className="book-image" />
        <div className="book-info">
          <h2 className="book-title">{book.title}</h2>
          <p className="book-author">{book.author}</p>
          
          <p className="book-description">{book.description || "No description available."}</p>
<p className="book-price">${book.price}</p>
          <div className="quantity-selector">
            <label>Quantity: </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(book, quantity)}
          >
            Add to Cart
          </button>

          <Link to="/books" className="back-btn">← Back to Books</Link>
        </div>
      </div>
    </div>
  );
}
