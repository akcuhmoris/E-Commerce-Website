// File: frontend/src/api/payments.js
import api from './api';

/**
 * Create a Stripe Payment Intent via backend
 * @param {{ amount: number, currency: string }} data
 */
export function createPaymentIntent(data) {
  return api.post('/api/payments/create-payment-intent', data);
}
