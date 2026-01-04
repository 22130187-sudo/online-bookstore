import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import "./Books.css"; 

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // Updated to Port 5001
        const res = await axios.get("http://localhost:5002/api/books");
        setBooks(res.data);
      } catch (err) {
        console.error("Error fetching books:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) return <div className="loader">Loading Library...</div>;

  return (
    <div className="books-page">
      <div className="books-header">
        <h1>Our Collection</h1>
        <p>Explore our curated list of timeless classics and modern hits.</p>
      </div>
      
      <div className="books-grid">
        {books.map((book) => (
          <div className="book-card-pro" key={book.id}>
            
            {/* The Image Link */}
            <Link to={`/books/${book.id}`} className="image-wrapper">
              <img 
                src={book.image.startsWith("http") ? book.image : `/images/${book.image}`}
                alt={book.title} 
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x600?text=No+Cover"; }}
              />
              {/* Optional: Overlay on hover */}
              <div className="overlay">
                <span>View Details</span>
              </div>
            </Link>

            {/* The Info */}
            <div className="info-wrapper">
              <p className="category">{book.category || "General"}</p>
              
              <Link to={`/books/${book.id}`} className="title-link">
                <h3>{book.title}</h3>
              </Link>
              
              <p className="author">by {book.author}</p>
              
              <div className="price-row">
                <span className="price">${Number(book.price).toFixed(2)}</span>
                
                {/* Simple text status instead of buttons */}
                {book.stock > 0 ? (
                  <span className="status in-stock">In Stock</span>
                ) : (
                  <span className="status out-stock">Sold Out</span>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}