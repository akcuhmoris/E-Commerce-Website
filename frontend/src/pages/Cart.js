import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cartItems, total, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl mb-4">Your cart is empty</h2>
        <Link to="/" className="text-blue-600">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="border rounded-lg overflow-hidden">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-lg">Total: <span className="font-semibold">${total.toFixed(2)}</span></p>
        <div className="space-x-2">
          <button
            onClick={clearCart}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Clear Cart
          </button>
          <button
            onClick={() => navigate('/checkout')}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
