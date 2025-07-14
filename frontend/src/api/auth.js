// frontend/src/api/auth.js
import api from './api';

/**
 * Register a new user
 * @param {{ name: string, email: string, password: string }} user
 */
export function register(user) {
  return api.post('/api/auth/register', user);
}

/**
 * Log in an existing user (stores JWT in localStorage)
 * @param {{ email: string, password: string }} credentials
 */
export async function login(credentials) {
  const res = await api.post('/api/auth/login', credentials);
  const { token } = res.data;
  localStorage.setItem('token', token);
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return token;
}

export function logout() {
  localStorage.removeItem('token');
  delete api.defaults.headers.common['Authorization'];
}
