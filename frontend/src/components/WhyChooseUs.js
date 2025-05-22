// src/components/WhyChooseUs.js
import React from 'react';
import { ShieldCheck, Clock, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    title: 'Trusted & Insured',
    description: 'All staff are background-checked, trained, and fully insured for peace of mind.'
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: 'On-Time Guarantee',
    description: 'We value your time. Our teams arrive promptly, every time.'
  },
  {
    icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
    title: 'Flawless Finish',
    description: 'We’re obsessed with the details. You’ll see the spotless difference.'
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10">Why Choose Perfect Stay Cleaning?</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-6 shadow-md rounded-xl hover:shadow-xl transition">
            {item.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
