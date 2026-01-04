import React from 'react';
import './Features.css';

export default function Features() {
  const features = [
    {
      icon: "📚",
      title: "Curated Collection",
      desc: "Hand-picked titles from timeless classics to modern bestsellers."
    },
    {
      icon: "🚀",
      title: "Fast Shipping",
      desc: "Order today and start reading your next adventure within days."
    },
    {
      icon: "💎",
      title: "Mint Condition",
      desc: "Every book is inspected to ensure it arrives in perfect quality."
    },
    {
      icon: "🔒",
      title: "Secure Checkout",
      desc: "Your data is protected with top-tier encryption standards."
    }
  ];

  return (
    <section className="features-section">
      <h2 className="features-title">Why Readers Love Us</h2>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-heading">{feature.title}</h3>
            <p className="feature-text">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}