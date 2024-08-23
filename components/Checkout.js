import React from 'react';
import { useHistory } from 'react-router-dom';

function Checkout({ cartItems, totalAmount }) {
  const history = useHistory();

  const handleCheckout = async () => {
    // Sending the checkout request to the backend
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartItems, totalAmount }),
    });

    if (response.ok) {
      alert('Checkout successful!');
      history.push('/');
    } else {
      alert('Checkout failed!');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.quantity} x ${item.price}</span>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
      <button onClick={handleCheckout}>Confirm and Pay</button>
    </div>
  );
}

export default Checkout;

