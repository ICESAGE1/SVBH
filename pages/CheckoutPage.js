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

