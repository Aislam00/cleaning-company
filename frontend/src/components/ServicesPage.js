// src/components/ServicesPage.js
import React from 'react';

function ServicesPage() {
  const services = [
    {
      title: 'Standard Cleaning',
      description: 'Maintain a fresh and hygienic space with our thorough and regular standard cleaning service.',
      price: 'From £25/hour'
    },
    {
      title: 'Deep Cleaning',
      description: 'A complete and detailed clean for hard-to-reach areas. Ideal for spring cleaning or post-events.',
      price: 'From £120 flat rate'
    },
    {
      title: 'End of Tenancy Cleaning',
      description: 'Ensure your property is spotless and ready for inspection with our end of tenancy cleaning package.',
      price: 'Studio from £140'
    },
    {
      title: 'Commercial Cleaning',
      description: 'Tailored cleaning for office spaces, retail units, and other commercial premises.',
      price: 'Custom pricing'
    },
    {
      title: 'Airbnb Cleaning',
      description: 'Professional, fast-turnover cleaning between guest stays to ensure 5-star reviews.',
      price: 'From £35 per changeover'
    },
    {
      title: 'After Builders Cleaning',
      description: 'Post-construction cleaning to remove dust, debris, and residue thoroughly.',
      price: 'From £150 flat rate'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white text-center">
      <h1 className="text-4xl font-heading font-bold text-navy mb-10">Our Cleaning Services</h1>
      <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-lightgray p-6 rounded-xl shadow hover:shadow-lg transition text-left">
            <h2 className="text-xl font-heading text-navy font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700 font-body mb-4">{service.description}</p>
            <span className="text-navy font-bold font-body text-sm">{service.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesPage;
