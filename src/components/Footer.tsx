
import React from 'react';
import { Facebook, Instagram, Youtube, Tiktok, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="mr-1">Learn</span>
              <span className="text-driving-lightBlue">2</span>
              <span>Drive</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional driving instruction for learners of all levels. We focus on creating safe, confident drivers for life.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-driving-blue transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-driving-blue transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-driving-blue transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-driving-blue transition-colors" aria-label="TikTok">
                <Tiktok size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('enquiry')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Enquiry
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Beginner Driving Lessons
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Intensive Driving Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Theory Test Preparation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Pass Plus Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Refresher Lessons
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-driving-blue mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Driving Avenue<br />
                  London, EC1A 1BB
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-driving-blue mr-2 flex-shrink-0" />
                <span className="text-gray-400">020 7123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-driving-blue mr-2 flex-shrink-0" />
                <a href="mailto:info@learn2drive.com" className="text-gray-400 hover:text-white transition-colors">
                  info@learn2drive.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Learn2Drive Driving School. All rights reserved.
          </div>
          
          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
