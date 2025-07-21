import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

export default function NavBar() {
  const { token, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/cart" className="hover:underline">
          Cart ({cartItems.length})
        </Link>
        {token ? (
          <>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <button onClick={logout} className="hover:underline">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
