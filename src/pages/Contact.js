// src/pages/Contact.js
import React from "react";
import "./Contact.css"; 

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us 💌</h1>
      <p className="contact-subtitle">
        Have questions or just want to say hi? Reach out to us anytime!
      </p>

      <div className="contact-info">
        <p><strong>Email:</strong> support@YourFavouritebookstore.com</p>
        <p><strong>Phone:</strong> +961 0000 0000</p>
        <p><strong>Address:</strong> 123 Book Street, Beirut, Lebanon</p>
      </div>
    </div>
  );
}
