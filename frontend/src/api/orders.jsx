// File: frontend/src/api/orders.js
import api from './api';

/**
 * Create a new order in backend
 * @param {{ items: Array<{ productId: number, quantity: number, price: number }> }} orderData
 */
export function createOrder(orderData) {
  return api.post('/api/orders', orderData);
}

/**
 * Fetch all orders for the authenticated user
 */
export function fetchOrders() {
  return api.get('/api/orders');
}