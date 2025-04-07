
import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote 
} from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format",
    text: "Learn2Drive exceeded all my expectations! My instructor was patient and knowledgeable. I passed my test on the first attempt, and I felt completely prepared for driving independently.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format",
    text: "As someone who was nervous about driving, I couldn't have chosen a better school. My instructor built my confidence gradually and always made me feel comfortable behind the wheel.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Wilson",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format",
    text: "I tried another driving school before switching to Learn2Drive, and the difference was incredible. Their teaching methods are clear, practical, and really helped me understand how to be a safe driver.",
    rating: 4
  }
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Auto-advance the carousel
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path 
          fillRule="evenodd" 
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
          clipRule="evenodd" 
        />
      </svg>
    ));
  };

  const review = reviews[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Student Reviews</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="relative p-6 md:p-10 bg-white shadow-lg rounded-lg overflow-hidden">
            
            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-driving-blue/10">
              <Quote size={60} />
            </div>
            
            {/* Review content */}
            <div 
              className={`flex flex-col md:flex-row items-center gap-8 transition-opacity duration-500 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {/* Photo */}
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <img 
                  src={review.photo} 
                  alt={review.name} 
                  className="w-full h-full object-cover rounded-full border-4 border-driving-lightBlue/30"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 relative z-10">
                <div className="flex mb-2">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-driving-darkBlue">{review.name}</p>
              </div>
            </div>
            
            {/* Navigation controls */}
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full bg-driving-blue/10 text-driving-blue hover:bg-driving-blue hover:text-white transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-driving-blue/10 text-driving-blue hover:bg-driving-blue hover:text-white transition-colors"
                aria-label="Next review"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index ? 'w-6 bg-driving-blue' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
