import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from backend or local storage
    setCartItems(JSON.parse(localStorage.getItem('cartItems')) || []);
  }, []);

  const handleCheckout = () => {
    // Redirect to checkout page
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x {item.price}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default CartPage;

