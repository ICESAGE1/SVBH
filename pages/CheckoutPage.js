import React from 'react';
import { useHistory } from 'react-router-dom';

function CheckoutPage() {
  const history = useHistory();

  const handleCheckout = async () => {
    const response = await fetch('/api/checkout', {
      method: 'POST',
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
      <h1>Checkout</h1>
      <button onClick={handleCheckout}>Confirm and Pay</button>
    </div>
  );
}

export default CheckoutPage;

import React, { useContext } from 'react';
import Checkout from '../components/Checkout';
import { CartContext } from '../context/CartContext'; // Assuming you have a context to manage cart state

function CheckoutPage() {
  const { cartItems } = useContext(CartContext);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <Checkout cartItems={cartItems} totalAmount={totalAmount} />
    </div>
  );
}

export default CheckoutPage;

