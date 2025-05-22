// src/components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section
      className="relative flex items-center justify-center h-[90vh] bg-cover bg-center pt-24"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/hero-cleaning.jpg'})`,
      }}
    >
      <div className="text-center px-6 max-w-3xl text-white z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Premium Cleaning Services in London
        </h1>
        <p className="text-lg mb-6 font-body">
          Reliable, detail-oriented, and tailored for Airbnb hosts, professionals, and busy households.
        </p>
        <Link
          to="#booking"
          className="inline-block bg-gold text-navy font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-400 transition"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}

export default Hero;
