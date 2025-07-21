// frontend/src/components/Layout.jsx
import React from 'react';
import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <NavBar />
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-gray-200 text-center py-4">
        © {new Date().getFullYear()} MyStore
      </footer>
    </div>
  );
}
