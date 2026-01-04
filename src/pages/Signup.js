import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css"; // Uses the same shared CSS file

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); // To show success message before redirect
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // --- FIX: Updated Port to 5001 ---
      await axios.post("http://localhost:5002/api/register", formData);
      
      setSuccess(true);
      
      // Wait 2 seconds so user sees the success message, then redirect
      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (err) {
      setError(err.response?.data?.error || "Registration failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card">
        
        {/* 1. Left Side: Image (Overriding the default image for Signup) */}
        <div 
          className="auth-image" 
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80')"}}
        >
          <div className="overlay">
            <h3>"The journey of a lifetime starts with the turning of a page."</h3>
            <p style={{color:'rgba(255,255,255,0.8)', fontSize:'0.9rem', marginTop:'10px'}}>— Rachel Anders</p>
          </div>
        </div>

        {/* 2. Right Side: Form */}
        <div className="auth-form-section">
          <div className="auth-header">
            <h2>Join Our Community</h2>
            <p>Create an account to curate your own library.</p>
          </div>

          {/* Inline Feedback Messages */}
          {error && <div className="error-message">{error}</div>}
          
          {success ? (
            <div className="success-message" style={{padding: '30px', backgroundColor: '#e8f5e9', color: '#2e7d32', borderRadius: '8px', textAlign: 'center'}}>
              <div style={{fontSize: "3rem", marginBottom: "10px"}}>🎉</div>
              <h3>Account Created!</h3>
              <p>Redirecting you to login...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="e.g. Elizabeth Bennet" 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email" 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Create a strong password" 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="auth-btn" disabled={loading}>
                  {loading ? "Creating Account..." : "Sign Up"}
                </button>
              </div>
            </form>
          )}

          <div className="auth-footer">
            <p>Already have an account? <Link to="/login">Sign in here</Link></p>
          </div>
        </div>

      </div>
    </div>
  );
}