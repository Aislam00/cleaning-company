// src/components/Testimonials.js
import React from 'react';

const testimonials = [
  {
    name: 'Sarah A.',
    quote:
      'Perfect Stay Cleaning exceeded all expectations! The team was punctual, polite, and left my flat spotless. Highly recommend!'
  },
  {
    name: 'James K.',
    quote:
      'Their attention to detail is unmatched. I booked an end of tenancy clean and the property manager was very impressed.'
  },
  {
    name: 'Lena R.',
    quote:
      'From booking to completion, the experience was seamless. Amazing customer service and sparkling results.'
  }
];

function Testimonials() {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition text-left"
          >
            <p className="italic text-gray-700 mb-4">“{testimonial.quote}”</p>
            <p className="font-semibold text-sm text-gray-900">— {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
