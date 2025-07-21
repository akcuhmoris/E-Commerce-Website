// frontend/src/pages/Home.jsx
import React from 'react';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
            Welcome to MyStore!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our latest products and unbeatable deals. Shop now and
            elevate your style with the best selection around.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <ProductList />
      </section>
    </div>
  );
}
