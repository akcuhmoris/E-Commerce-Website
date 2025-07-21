// // frontend/src/pages/Checkout.js
// import React, { useContext, useEffect, useState } from 'react';
// import { CartContext } from '../context/CartContext';
// import { loadStripe } from '@stripe/stripe-js';
// import {
//   Elements,
//   CardElement,
//   useStripe,
//   useElements
// } from '@stripe/react-stripe-js';
// import { createPaymentIntent } from '../api/payments';
// import { createOrder } from '../api/orders';
// import { useNavigate } from 'react-router-dom';

// // Load your Stripe public key
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

// function PaymentForm() {
//   const { cartItems, total, clearCart } = useContext(CartContext);
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret, setClientSecret] = useState('');
//   const [error, setError] = useState(null);
//   const [processing, setProcessing] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Create a PaymentIntent on mount
//     createPaymentIntent({ amount: total, currency: 'usd' })
//       .then(res => setClientSecret(res.data.clientSecret))
//       .catch(err => setError('Failed to initialize payment.'));
//   }, [total]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     setProcessing(true);

//     // Confirm the card payment
//     const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
//       clientSecret,
//       {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       }
//     );

//     if (stripeError) {
//       setError(stripeError.message);
//       setProcessing(false);
//       return;
//     }

//     // On success, create the order in backend
//     await createOrder({
//       items: cartItems.map(item => ({
//         productId: item.id,
//         quantity: item.quantity,
//         price: item.price
//       }))
//     });

//     clearCart();
//     navigate('/confirmation', { state: { paymentIntent } });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4">
//       <h2 className="text-xl font-bold">Checkout</h2>
//       <div>
//         <CardElement options={{ hidePostalCode: true }} />
//       </div>
//       {error && <p className="text-red-600">{error}</p>}
//       <button
//         type="submit"
//         disabled={!stripe || processing}
//         className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50"
//       >
//         {processing ? 'Processing…' : `Pay $${total.toFixed(2)}`}
//       </button>
//     </form>
//   );
// }

// export default function Checkout() {
//   return (
//     <Elements stripe={stripePromise}>
//       <PaymentForm />
//     </Elements>
//   );
// }
