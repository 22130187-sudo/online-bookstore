import React, { useEffect, useState, useContext } from "react"; // Added useContext
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext"; // Import the Context
import "./BookDetails.css"; 

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 1. Grab the addToCart function from the global state
  const { addToCart } = useContext(CartContext); 

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:5002/api/books/${id}`);
        setBook(res.data);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  // 2. The Real Add Logic
  const handleAddToCart = () => {
    // Send the book and quantity to the Context
    addToCart(book, qty);
    
    // Give feedback
    alert(`Successfully added ${qty} x "${book.title}" to your cart! 🛒`);
  };

  if (loading) return <div style={{padding: "50px", textAlign: "center"}}>Loading...</div>;
  if (!book) return <div style={{padding: "50px", textAlign: "center"}}>Book not found.</div>;

  return (
    <div className="book-details-page">
      <div className="container" style={{maxWidth: "1100px", margin: "0 auto", padding: "0 20px"}}>
        
        <button className="back-btn" onClick={() => navigate(-1)}>
          &larr; Back to Books
        </button>

        <div className="details-layout">
          {/* Left: Image */}
          <div className="details-image">
            <img 
              src={book.image.startsWith("http") ? book.image : `/images/${book.image}`}
              alt={book.title} 
              onError={(e) => e.target.src = "https://placehold.co/400x600?text=No+Image"}
            />
          </div>

          {/* Right: Info */}
          <div className="details-info">
            <span className="badge">{book.category || "General"}</span>
            
            <h1>{book.title}</h1>
            <p className="author">By {book.author}</p>
            
            <div className="description">
              <p>{book.description}</p>
            </div>

            <h2 className="price">${Number(book.price).toFixed(2)}</h2>

            <div className="action-area">
              {book.stock > 0 ? (
                <>
                  <div className="qty-input">
                    <label style={{fontSize: "0.8rem", color: "#666"}}>Quantity</label>
                    <input 
                      type="number" 
                      min="1" 
                      max={book.stock} 
                      value={qty} 
                      onChange={(e) => setQty(Number(e.target.value))} 
                    />
                  </div>
                  {/* Calls the new function */}
                  <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                </>
              ) : (
                <div style={{color: "red", fontWeight: "bold", fontSize: "1.2rem"}}>
                  Out of Stock
                </div>
              )}
            </div>
            
            <p style={{marginTop: "15px", fontSize: "0.9rem", color: book.stock > 0 ? "green" : "red"}}>
               {book.stock > 0 ? `${book.stock} items in stock` : "Unavailable"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}