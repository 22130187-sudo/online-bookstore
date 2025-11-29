import React from "react";
import { Link } from "react-router-dom";
import gatsby from "../assets/gatsby.jpg";
import nine from "../assets/nine.jpg";
import mockingbird from "../assets/mockingbird.jpg";
import "./Home.css";

export default function Home() {
  const featuredBooks = [
    { id: 1, title: "The Great Gatsby", image: gatsby },
    { id: 2, title: "Nine", image: nine },
    { id: 3, title: "To Kill a Mockingbird", image: mockingbird },
  ];

  return (
    <div className="home-container">
      <section className="hero">
        <h1 className="hero-title">Discover Your Next Favorite Book</h1>
        <p className="hero-subtitle">Explore a world of stories, magic, and imagination.</p>
        <div className="hero-buttons">
          <Link to="/books" className="hero-btn">Browse Books</Link>
        </div>
      </section>

      <section className="featured-section">
        <h2 className="section-title">Featured Books</h2>
        <div className="featured-grid">
          {featuredBooks.map(book => (
            <Link to={`/books/${book.id}`} key={book.id} className="featured-card">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
            </Link>
          ))}
        </div>
        <div className="all-books-wrapper">
          <Link to="/books" className="view-all-btn">See All Books →</Link>
        </div>
      </section>
    </div>
  );
}

