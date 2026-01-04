import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.css";

export default function BookCard({ book }) {
  // Handle image pathing (local vs http)
  const imagePath = book.image.startsWith("http") ? book.image : `/images/${book.image}`;
  const backupImage = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

  return (
    <div className="book-card">
      <div className="card-image-wrapper">
        <img
          src={imagePath}
          alt={book.title}
          onError={(e) => { e.target.onerror = null; e.target.src = backupImage; }}
        />
      </div>
      
      <div className="card-content">
        <h3 title={book.title}>{book.title}</h3>
        <p className="author">by {book.author}</p>
        <div className="card-footer">
          <span className="price">${Number(book.price).toFixed(2)}</span>
          <Link to={`/books/${book.id}`} className="card-btn">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}