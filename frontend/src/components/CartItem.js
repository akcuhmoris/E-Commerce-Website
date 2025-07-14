import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartItem({ item }) {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="flex items-center space-x-4 p-4 border-b">
      <img src={item.imageUrl} alt={item.name} className="h-16 w-16 object-cover rounded" />
      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <p>${item.price.toFixed(2)} × {item.quantity}</p>
      </div>
      <div className="flex space-x-2">
        <button onClick={() => removeFromCart(item.id)} className="px-2">−</button>
        <button onClick={() => addToCart(item)} className="px-2">+</button>
      </div>
    </div>
  );
}
