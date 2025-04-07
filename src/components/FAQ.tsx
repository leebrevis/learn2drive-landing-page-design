
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    id: 1,
    question: "How many lessons will I need to pass my test?",
    answer: "The number of lessons varies for each student depending on their prior experience, natural aptitude, and how frequently they practice. On average, most students require between 30-40 hours of professional instruction, combined with additional private practice. Our instructors will assess your progress and advise you on when you're ready for the test."
  },
  {
    id: 2,
    question: "What type of cars do you use for lessons?",
    answer: "We use modern, well-maintained vehicles equipped with dual controls for safety. Our fleet includes a range of popular models like Toyota Yaris, Ford Focus, and Volkswagen Golf. All our vehicles are regularly serviced and are less than five years old for your comfort and safety."
  },
  {
    id: 3,
    question: "Do you offer theory test preparation?",
    answer: "Yes, we offer comprehensive theory test preparation as part of our driving courses. This includes access to practice tests, hazard perception training, and one-on-one sessions to cover the Highway Code and other essential theory knowledge. Our theory pass rate is consistently above the national average."
  },
  {
    id: 4,
    question: "How can I book lessons and what payment methods do you accept?",
    answer: "You can book lessons through our website, by phone, or via email. We offer flexible scheduling options including evenings and weekends. We accept all major credit and debit cards, bank transfers, and cash payments. Many students opt for block bookings, which offer better value compared to individual lessons."
  },
  {
    id: 5,
    question: "What happens if I need to cancel a driving lesson?",
    answer: "We understand that plans can change. If you need to cancel or reschedule a lesson, we require a minimum of 48 hours notice to avoid any cancellation fees. For cancellations with less than 48 hours notice, a 50% fee may apply, and for same-day cancellations, the full lesson fee is typically charged."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="enquiry" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={item.id} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className={`w-full px-6 py-4 text-left font-medium flex items-center justify-between ${
                  activeIndex === index ? 'bg-driving-blue text-white' : 'hover:bg-gray-50'
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span>{item.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                )}
              </button>
              
              <div 
                id={`faq-answer-${item.id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
