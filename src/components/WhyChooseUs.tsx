
import React from 'react';
import { Award, Gauge, Car, Book, DollarSign, Star } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Qualified Instructors",
    description: "Our instructors are fully licensed, experienced, and undergo continuous professional development.",
    icon: <Award className="w-10 h-10 text-driving-blue" />
  },
  {
    id: 2,
    title: "Highest Success Rate",
    description: "We pride ourselves on our exceptional pass rates, consistently exceeding the national average.",
    icon: <Gauge className="w-10 h-10 text-driving-blue" />
  },
  {
    id: 3,
    title: "Highest Quality Vehicle",
    description: "Learn in modern, well-maintained dual-control vehicles equipped with the latest safety features.",
    icon: <Car className="w-10 h-10 text-driving-blue" />
  },
  {
    id: 4,
    title: "Session for Theory",
    description: "Comprehensive theory training using up-to-date materials and practice tests to ensure your success.",
    icon: <Book className="w-10 h-10 text-driving-blue" />
  },
  {
    id: 5,
    title: "Affordable Rates",
    description: "Competitive pricing with flexible lesson packages and special rates for block bookings.",
    icon: <DollarSign className="w-10 h-10 text-driving-blue" />
  },
  {
    id: 6,
    title: "Unmatched Expertise",
    description: "With decades of combined experience, our instructors bring unparalleled knowledge to every lesson.",
    icon: <Star className="w-10 h-10 text-driving-blue" />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
