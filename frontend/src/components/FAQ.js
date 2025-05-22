// src/components/FAQ.js
import React from 'react';

const faqs = [
  {
    question: 'Do you bring your own cleaning supplies?',
    answer: 'Yes, our team arrives fully equipped with premium, eco-friendly cleaning products and all necessary tools.'
  },
  {
    question: 'Can I book a recurring service?',
    answer: 'Absolutely! We offer weekly, bi-weekly, and monthly cleaning schedules based on your needs.'
  },
  {
    question: 'What if I’m not satisfied with the clean?',
    answer: 'We offer a satisfaction guarantee. Let us know within 24 hours and we’ll return to make it right.'
  }
];

function FAQ() {
  return (
    <section className="bg-gray-50 py-20 px-4 text-center">
      <h2 className="text-4xl font-bold mb-10">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-6 text-left">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-700 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
