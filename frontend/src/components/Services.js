// src/components/Services.js
import React from 'react';

function Services() {
  const services = [
    { title: 'Standard Cleaning', description: 'Perfect for maintaining a tidy and fresh home on a regular basis.' },
    { title: 'Deep Cleaning', description: 'A detailed clean covering every nook and cranny.' },
    { title: 'End of Tenancy', description: 'Meets letting agent standards. Deposit back guaranteed.' },
    { title: 'Commercial Cleaning', description: 'Ideal for offices, retail, and more.' },
    { title: 'Airbnb Cleaning', description: 'Fast, guest-ready cleans for Airbnb and serviced properties.' },
    { title: 'After Builders Cleaning', description: 'Post-construction cleaning to remove dust and debris.' },
  ];

  return (
    <section id="services" className="py-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 font-heading text-navy">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6">
        {services.map((service, index) => (
          <div key={index} className="bg-lightgray p-6 rounded-lg shadow text-left">
            <h3 className="text-xl font-semibold mb-2 text-navy">{service.title}</h3>
            <p className="text-gray-700 font-body">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
