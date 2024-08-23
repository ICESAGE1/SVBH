import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from the backend or local storage
    const fetchCartItems = async () => {
      const response = await fetch('/api/cart');
      const data = await response.json();
      setCartItems(data);
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (id) => {
    // Remove item from cart logic (you could create a delete route in the backend)
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    // Update the backend
    await fetch(`/api/cart/${id}`, {
      method: 'DELETE',
    });
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span>{item.quantity} x ${item.price}</span>
                  <button onClick={() => handleRemoveItem(item

