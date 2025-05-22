// src/components/BookingForm.js
import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    date: '',
    details: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    setStatus(data.message);
    if (res.ok) {
      setFormData({ name: '', email: '', address: '', date: '', details: '' });
    }
  };

  return (
    <section id="booking" className="bg-gray-100 py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Book Your Cleaning</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md"
          />
          <textarea
            name="details"
            placeholder="Cleaning details..."
            value={formData.details}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Submit Booking
          </button>
        </form>
        {status && <p className="text-green-600 mt-4 font-medium">{status}</p>}
      </div>
    </section>
  );
}

export default BookingForm;
