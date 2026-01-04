import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BookCard from "../components/BookCard";
import "./Home.css"; 

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5002/api/books") 
      .then(res => setBooks(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="home-page">
      
      {/* 1. HERO SECTION */}
      <div className="hero">
        <div className="hero-content">
          <h1>Fall in Love with a New Story</h1>
          <p>Curated classics, modern masterpieces, and everything in between.</p>
          <button className="hero-btn" onClick={() => navigate("/books")}>Browse Collection</button>
        </div>
      </div>

      {/* 2. FEATURED SECTION */}
      <div className="container section-padding">
        <div className="section-header">
          <h2>Editor's Picks</h2>
          <div className="divider-center"></div>
          <p className="section-subtitle">Hand-picked favorites just for you.</p>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Curating the best books...</p>
          </div>
        ) : (
          /* --- THE GRID --- */
          <div className="grid-4-col"> 
            {/* CHANGED: slice(0, 4) to show 4 books */}
            {books.slice(0, 4).map(b => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
        )}
        
        <div className="text-center" style={{ marginTop: '50px' }}>
          <button className="btn-secondary" onClick={() => navigate("/books")}>
            View Full Library &rarr;
          </button>
        </div>
      </div>

      {/* 3. NEWSLETTER SECTION */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h2>Join Our Literary Circle</h2>
          <p>Get weekly book recommendations and exclusive discounts.</p>
          <div className="input-group">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

    </div>
  );
}