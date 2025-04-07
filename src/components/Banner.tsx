
import React from 'react';

const Banner = () => {
  return (
    <section className="relative h-80 md:h-96">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format')",
        }}
      ></div>
      
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Start Your Driving Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards driving independence with Learn2Drive.
          </p>
          <button className="btn-primary">Book Your First Lesson Today</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
