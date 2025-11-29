// src/pages/Books.js
import React from "react";
import BookCard from "../components/BookCard";
import books from "../data/books";
import "./Books.css";

export default function Books() {
  return (
    <div className="books-page">
      <h1 className="page-title">All Books</h1>
      <div className="books-grid">
        {books.map(book => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
}
