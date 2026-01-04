import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <div className="contact-page">
      
      {/* 1. Header */}
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <div className="divider-small"></div>
        <p>We'd love to hear from you. Here is how you can reach us.</p>
      </div>

      <div className="container contact-wrapper">
        
        {/* 2. Left Column: Contact Info */}
        <div className="contact-info">
          <div className="info-box">
            <h3>Visit Our Store</h3>
            <p>123 Literary Lane,<br />Bookville, BK 90210</p>
          </div>

          <div className="info-box">
            <h3>Contact Info</h3>
            <p><strong>Email:</strong> hello@booknook.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          </div>

          <div className="info-box">
            <h3>Opening Hours</h3>
            <p>Mon - Fri: 9am - 8pm</p>
            <p>Sat - Sun: 10am - 6pm</p>
          </div>
          
          {/* Decorative Image */}
          <img 
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=600&q=80" 
            alt="Customer Service" 
            className="contact-image"
          />
        </div>

        {/* 3. Right Column: The Form */}
        <div className="form-container">
          {status === 'success' ? (
            <div className="success-message">
              <h3>Thank you! 💌</h3>
              <p>Your message has been sent. We will get back to you shortly.</p>
              <button onClick={() => setStatus(null)} className="btn-text">Send another message</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Jane Doe" required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="jane@example.com" required />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <select>
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Returns & Exchanges</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="How can we help you today?" rows="5" required></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>

      </div>

      {/* 4. FAQ Section */}
      <div className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Do you ship internationally?</h4>
              <p>Yes, we ship to over 50 countries worldwide. Shipping times vary by location.</p>
            </div>
            <div className="faq-item">
              <h4>Can I return a book?</h4>
              <p>Returns are accepted within 30 days of purchase if the book is in original condition.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer gift wrapping?</h4>
              <p>Absolutely! You can select gift wrapping at checkout for a small fee.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}