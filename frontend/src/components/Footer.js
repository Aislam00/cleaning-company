// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-8 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-2">Perfect Stay Cleaning</h3>
        <p className="text-sm mb-4">
          Serving Greater London with premium cleaning services for homes, rentals, and commercial properties.
        </p>
        <p className="text-sm">Email: info@perfectstaycleaning.co.uk</p>
        <p className="text-sm">Phone: +44 20 1234 5678</p>
        <div className="mt-4 text-xs text-gray-400">© {new Date().getFullYear()} Perfect Stay Cleaning. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
