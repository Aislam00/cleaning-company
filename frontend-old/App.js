import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import BookingForm from './components/BookingForm';
import './App.css';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <BookingForm />
    </div>
  );
}

export default App;
