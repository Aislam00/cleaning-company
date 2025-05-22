// src/components/Reviews.js
import React from 'react';

function Reviews() {
  const testimonials = [
    {
      name: 'Sophie M.',
      feedback: 'Perfect Stay Cleaning always leaves my Airbnb spotless. Guests consistently leave 5-star reviews for cleanliness!',
    },
    {
      name: 'James L.',
      feedback: 'Professional and reliable. The team is friendly and their deep cleans are amazing.',
    },
    {
      name: 'Fatima R.',
      feedback: 'Highly recommend for end-of-tenancy cleans. Got our deposit back without any issues!',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-heading font-bold mb-10 text-navy">What Our Clients Say</h2>
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {testimonials.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic mb-4 text-gray-700">"{review.feedback}"</p>
            <h4 className="font-semibold text-navy">{review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
