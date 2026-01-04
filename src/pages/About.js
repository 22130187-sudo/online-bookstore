import React from "react";
import "./Pages.css"; 

export default function About() {
  return (
    <div className="about-page">
      
      {/* 1. Header Section */}
      <div className="about-header">
        <h1 className="about-title">Curating Literary Excellence</h1>
        <div className="divider"></div>
        <p className="about-subtitle">
          More than just a bookstore. A sanctuary for the imagination.
        </p>
      </div>

      {/* 2. The Main Content (Split Layout) */}
      <div className="container about-content">
        
        {/* Section: Our Story */}
        <div className="about-section">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded with a passion for the written word, we believe that every story holds the power to transform a perspective. 
              What started as a small corner shop has grown into a community hub for dreamers, thinkers, and creators.
              We don't just sell books; we curate experiences that linger long after the final page is turned.
            </p>
          </div>
          <div className="about-image">
             {/* Elegant Library Image */}
            <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80" alt="Library interior" />
          </div>
        </div>

        {/* Section: Our Mission (Reversed) */}
        <div className="about-section reverse">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to bridge the gap between timeless classics and modern narratives. 
              Whether you are a scholar searching for a rare edition or a casual reader looking for an escape, 
              we are dedicated to helping you discover your next great adventure.
            </p>
            <p className="signature">Explore. Dream. Discover.</p>
          </div>
          <div className="about-image">
             {/* Cozy Coffee/Book Image */}
            <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80" alt="Reading nook" />
          </div>
        </div>

      </div>

      {/* 3. Professional Stats Bar */}
      <div className="stats-bar">
        <div className="stat-item">
          <h3>5k+</h3>
          <p>Books in Stock</p>
        </div>
        <div className="stat-item">
          <h3>1200+</h3>
          <p>Happy Readers</p>
        </div>
        <div className="stat-item">
          <h3>100%</h3>
          <p>Curated Selection</p>
        </div>
      </div>
    </div>
  );
}