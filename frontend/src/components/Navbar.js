// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-navy shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        <Link to="/" className="text-3xl font-heading font-bold text-white tracking-wide">
          Perfect Stay Cleaning
        </Link>
        <div className="flex items-center space-x-10">
          <nav className="space-x-8 font-semibold text-white text-base">
            <Link to="/services" className="hover:text-gray-300 transition">Services</Link>
            <a href="#why-us" className="hover:text-gray-300 transition">Why Us</a>
            <a href="#booking" className="hover:text-gray-300 transition">Book</a>
            <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
          </nav>
          <img
            src="/logo-icon.png"
            alt="Logo"
            className="h-8 w-8 object-contain"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
