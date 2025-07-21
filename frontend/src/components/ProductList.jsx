import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(res => setProducts(res.data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
