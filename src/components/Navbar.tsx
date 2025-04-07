import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Youtube, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-xl md:text-2xl font-bold text-driving-blue">
              <span className="mr-1">Learn</span>
              <span className="text-driving-darkBlue">2</span>
              <span>Drive</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About Us</button>
            <button onClick={() => scrollToSection('gallery')} className="nav-link">Our Gallery</button>
            <button onClick={() => scrollToSection('enquiry')} className="nav-link">Enquiry</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact Us</button>
          </div>
          
          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="text-gray-600 hover:text-driving-blue transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-driving-blue transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-driving-blue transition-colors" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 focus:outline-none"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4 absolute left-4 right-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-left py-2 px-3 hover:bg-gray-100 rounded">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 px-3 hover:bg-gray-100 rounded">About Us</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left py-2 px-3 hover:bg-gray-100 rounded">Our Gallery</button>
              <button onClick={() => scrollToSection('enquiry')} className="text-left py-2 px-3 hover:bg-gray-100 rounded">Enquiry</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 px-3 hover:bg-gray-100 rounded">Contact Us</button>
              
              <div className="flex space-x-4 pt-2 border-t">
                <a href="#" className="text-gray-600 hover:text-driving-blue transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-driving-blue transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-driving-blue transition-colors" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
