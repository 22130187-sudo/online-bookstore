import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom"; 
import "./Cart.css";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const total = cart.reduce((acc, item) => {
    return acc + (Number(item.price) * (Number(item.quantity) || 1));
  }, 0);

  const handleCheckout = () => {
    if (!user) {
      alert("Please login to complete your purchase! 💖");
      navigate("/login");
      return;
    }
    navigate("/checkout");
  };

  const getImagePath = (item) => {
    if (!item.image) return "https://placehold.co/100x150?text=No+Img";
    if (item.image.startsWith("http")) return item.image;
    return `/images/${item.image}`;
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">Your Shopping Bag</h1>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
             <div style={{fontSize: "4rem", marginBottom: "20px"}}>🛍️</div>
             <p>Your bag is currently empty.</p>
             <Link to="/books" className="continue-btn">Start Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cart-content">
               {/* Header Row */}
               <div className="cart-header">
                 <span>Product</span>
                 <span>Quantity</span>
                 <span>Total</span>
                 <span></span>
               </div>

               {/* Items List */}
               <div className="cart-items-list">
                 {cart.map(item => (
                    <div key={item.id} className="cart-item">
                       
                       {/* Col 1: Product Image & Name */}
                       <div className="product-col">
                          <img 
                            src={getImagePath(item)} 
                            alt={item.title} 
                            className="cart-thumb" 
                          />
                          <div className="product-details">
                             <h4>{item.title}</h4>
                             <p className="unit-price">${Number(item.price).toFixed(2)}</p>
                          </div>
                       </div>

                       {/* Col 2: Quantity Selector */}
                       <div className="qty-selector">
                          <button onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}>-</button>
                          <span>{item.quantity || 1}</span>
                          <button onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}>+</button>
                       </div>

                       {/* Col 3: Row Total */}
                       <div className="total-col">
                          ${(Number(item.price) * (Number(item.quantity) || 1)).toFixed(2)}
                       </div>

                       {/* Col 4: Remove Button */}
                       <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                          &times;
                       </button>
                    </div>
                 ))}
               </div>
            </div>

            <div className="cart-summary">
               <div className="summary-row total">
                 <span>Total</span>
                 <span>${total.toFixed(2)}</span>
               </div>
               <button className="checkout-btn" onClick={handleCheckout}>
                 Proceed to Checkout ➡️
               </button>
               <Link to="/books" className="continue-link">Or continue shopping</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}