import React, { useState } from "react";
import './images/cart.svg'; // Assuming this is used for your cart image

function Main() {
  // State to manage cart visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Function to toggle cart
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div id="nav0" style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>Brand</div>
        <div style={{ flexGrow: 1 }}>Products</div>
        <div style={{ flexGrow: 40 }}>Contacts</div>
        <div style={{ flexGrow: 1 }}>Sign up</div>
        <div style={{ flexGrow: 1 }}>log in</div>
        <div className="cart-icon" onClick={toggleCart}>
          {/* Cart SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
        </div>
      </div>

      {/* Cart overlay - shown when isCartOpen is true */}
      {isCartOpen && (
        <div className="cart-overlay" onClick={toggleCart}>
          <div className="cart-content">
            <h2>Your Cart</h2>
            <p>Cart details go here...</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
