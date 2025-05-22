// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import BookingForm from './components/BookingForm';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage';

function App() {
  return (
    <Router>
      <div className="font-body text-gray-800 bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <WhyChooseUs />
                <BookingForm />
                <Reviews />
                <Footer />
              </>
            }
          />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
