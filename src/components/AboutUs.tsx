
import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div>
            <p className="text-gray-700 mb-4">
              At Learn2Drive, we've been committed to creating safe, confident drivers since 1998. Our driving school was founded on the principle that learning to drive should be a positive, empowering experience that builds skills for life.
            </p>
            <p className="text-gray-700 mb-4">
              Our team of passionate instructors brings decades of combined experience to every lesson. We understand that each student learns differently, which is why we tailor our instruction to your individual pace and learning style.
            </p>
            <p className="text-gray-700 mb-6">
              We take pride in our modern fleet of dual-control vehicles, comprehensive lesson plans, and our focus on developing not just the technical skills of driving, but the crucial decision-making and hazard perception abilities that make you a truly safe driver for life.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Our Courses</button>
              <button className="border-2 border-driving-blue text-driving-blue py-3 px-6 rounded-md font-medium hover:bg-driving-blue/10 transition-colors duration-300">
                Meet Our Team
              </button>
            </div>
          </div>
          
          {/* Animation */}
          <div className="relative h-64 mt-10 md:mt-0">
            {/* Road background */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gray-800 rounded-lg"></div>
            
            {/* Road lines */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8">
              <div className="road-line"></div>
              <div className="road-line"></div>
              <div className="road-line"></div>
            </div>
            
            {/* Car */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-car-move">
              <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="30" width="70" height="15" rx="5" fill="#1E88E5" />
                <rect x="25" y="15" width="50" height="15" rx="3" fill="#1E88E5" />
                <circle cx="30" cy="45" r="5" fill="#333" />
                <circle cx="70" cy="45" r="5" fill="#333" />
                <rect x="85" y="33" width="5" height="2" fill="#FF5252" />
                <rect x="10" y="33" width="5" height="2" fill="#FFEB3B" />
                <rect x="35" y="20" width="15" height="7" fill="#E1F5FE" />
                <rect x="55" y="20" width="15" height="7" fill="#E1F5FE" />
                <text x="40" y="42" fill="white" fontSize="10" fontWeight="bold">L</text>
              </svg>
            </div>
            
            {/* Traffic light */}
            <div className="absolute right-10 bottom-16 flex flex-col items-center">
              <div className="w-10 h-20 bg-gray-700 rounded-md overflow-hidden flex flex-col items-center justify-between p-1">
                <div className="w-7 h-7 rounded-full bg-red-500 animate-traffic-light"></div>
                <div className="w-7 h-7 rounded-full bg-yellow-500"></div>
                <div className="w-7 h-7 rounded-full bg-green-500"></div>
              </div>
              <div className="w-4 h-16 bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
