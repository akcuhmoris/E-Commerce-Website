import React from 'react';
import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <NavBar />
      <main className="flex-1 container mx-auto p-6">
        {children}
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; {new Date().getFullYear()} My E-Commerce
      </footer>
    </div>
  );
}
