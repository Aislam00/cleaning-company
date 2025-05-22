import React, { useState } from 'react';
import './App.css';

function App() {
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
    const res = await fetch('https://cleaning-company-dwod.onrender.com/api/bookings', {

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
    <div className="App" style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Book Your Cleaning</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input name="date" type="date" value={formData.date} onChange={handleChange} required />
        <textarea name="details" placeholder="Cleaning details..." value={formData.details} onChange={handleChange} />
        <button type="submit">Submit Booking</button>
      </form>
      {status && <p style={{ marginTop: '1rem', color: 'green' }}>{status}</p>}
    </div>
  );
}

export default App;
