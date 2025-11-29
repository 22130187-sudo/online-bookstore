
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./BookCard.css";

export default function BookCard({ book }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="book-card">
      <Link to={`/books/${book.id}`}>
        <img src={book.image} alt={book.title} className="book-image" />
      </Link>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p className="price">${book.price}</p>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
}
