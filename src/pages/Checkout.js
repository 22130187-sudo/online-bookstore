import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Checkout.css";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const total = cart.reduce((sum, item) => sum + (Number(item.price) * (Number(item.quantity) || 1)), 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        alert("⚠️ Please Log In first!");
        setLoading(false);
        return;
    }

    try {
      await axios.post("http://localhost:5002/api/checkout", { 
        items: cart,
        userId: user.id,
        total: total,
        paymentMethod: paymentMethod 
      });

      clearCart();
      alert("✅ Order Placed Successfully!");
      navigate("/");

    } catch (err) {
      console.error(err);
      alert("❌ Error: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) return (
    <div className="empty-checkout">
        <h2>Your Cart is Empty 🛒</h2>
        <button onClick={() => navigate("/books")}>Go Shopping</button>
    </div>
  );

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        
        {/* --- LEFT SIDE: FORM --- */}
        <div className="checkout-form-section">
          <div className="section-header-left">
            <h2>Checkout</h2>
            <p>Complete your purchase securely.</p>
          </div>

          <form onSubmit={handleSubmit} id="checkout-form">
            
            {/* Payment Method Toggle */}
            <div className="form-group-title">
                Payment Method
                <span className="secure-lock">🔒 Secure SSL</span>
            </div>
            
            <div className="payment-toggle">
              <button 
                type="button" 
                className={paymentMethod === "card" ? "active" : ""}
                onClick={() => setPaymentMethod("card")}
              >
                💳 Credit Card
              </button>
              <button 
                type="button" 
                className={paymentMethod === "cod" ? "active" : ""}
                onClick={() => setPaymentMethod("cod")}
              >
                💵 Cash on Delivery
              </button>
            </div>

            {/* Dynamic Inputs */}
            {paymentMethod === "card" ? (
              <div className="card-details fade-in">
                <label>Card Number</label>
                <input type="text" placeholder="0000 0000 0000 0000" required maxLength={19} />
                
                <div className="form-row">
                    <div className="full-width">
                        <label>Expiry</label>
                        <input type="text" placeholder="MM/YY" required maxLength={5} />
                    </div>
                    <div className="full-width">
                        <label>CVC</label>
                        <input type="text" placeholder="123" required maxLength={3} />
                    </div>
                </div>
                <label>Cardholder Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
            ) : (
              <div className="cod-info fade-in">
                 <p><strong>Cash on Delivery Selected.</strong></p>
                 <p>You will pay exactly <strong>${total.toFixed(2)}</strong> to the courier upon arrival.</p>
              </div>
            )}
          </form>
        </div>

        {/* --- RIGHT SIDE: SUMMARY --- */}
        <div className="checkout-summary">
            <h3>Order Summary</h3>
            <div className="summary-items">
                {cart.map((item) => (
                    <div key={item.id} className="summary-item">
                        <div className="summary-info">
                            <span className="summary-title">{item.title}</span>
                            <span className="summary-author">Qty: {item.quantity || 1}</span>
                        </div>
                        <span className="summary-price">${(Number(item.price) * (Number(item.quantity) || 1)).toFixed(2)}</span>
                    </div>
                ))}
            </div>
            
            <div className="divider-light"></div>
            
            <div className="summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>

            {/* The Submit Button is here visually, but triggers form on left */}
            <button 
                type="submit" 
                form="checkout-form" 
                className="pay-btn" 
                disabled={loading}
            >
                {loading ? "Processing..." : `PAY $${total.toFixed(2)}`}
            </button>

            <div className="security-badges">
                <span>🔒 256-bit SSL Encrypted Payment</span>
                <span>🛡️ 100% Money Back Guarantee</span>
            </div>
        </div>

      </div>
    </div>
  );
}