
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format')",
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Learning to Drive <br />
            <span className="text-driving-yellow">Begin Your Journey</span>
          </h1>
          <p className="text-xl text-white mb-8">
            Expert instruction that builds confidence and creates safe, skilled drivers for life.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Book a Lesson</button>
            <button className="border-2 border-white text-white py-3 px-6 rounded-md font-medium hover:bg-white/20 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce delay-150"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
