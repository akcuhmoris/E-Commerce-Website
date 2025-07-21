// frontend/src/components/NavBar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

export default function NavBar() {
  const { token, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600">
          MyStore
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative text-gray-800 hover:text-gray-600">
            🛒 Cart
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </Link>
          {token ? (
            <>
              <Link to="/orders" className="text-gray-800 hover:text-gray-600">
                Orders
              </Link>
              <Link to="/dashboard" className="text-gray-800 hover:text-gray-600">
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="text-gray-800 hover:text-gray-600 focus:outline-none"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-800 hover:text-gray-600">
                Login
              </Link>
              <Link to="/register" className="text-gray-800 hover:text-gray-600">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
