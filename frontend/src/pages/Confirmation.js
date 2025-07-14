// frontend/src/pages/Confirmation.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Confirmation() {
  const { state } = useLocation();
  const { paymentIntent } = state || {};

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Thank you for your purchase!</h2>
      {paymentIntent && (
        <p>Your payment <strong>{paymentIntent.status}</strong> (ID: {paymentIntent.id})</p>
      )}
      <Link to="/" className="text-blue-600 mt-4 inline-block">Continue Shopping</Link>
    </div>
  );
}
