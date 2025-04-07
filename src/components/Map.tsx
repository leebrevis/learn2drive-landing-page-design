
import React from 'react';

const Map = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Find Us</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="h-96 rounded-lg shadow-lg border border-gray-200 flex items-center justify-center bg-gray-100">
            <p className="text-gray-600">Map placeholder</p>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-driving-blue">Address</h3>
              <p className="text-gray-700">
                Learn2Drive Driving School<br />
                123 Driving Avenue<br />
                London, EC1A 1BB
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-driving-blue">Contact</h3>
              <p className="text-gray-700">
                Phone: 020 7123 4567<br />
                Email: info@learn2drive.com<br />
                Office Hours: Mon-Fri 9am-5pm
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-driving-blue">Coverage Area</h3>
              <p className="text-gray-700">
                We offer driving lessons throughout Greater London and surrounding areas.
                Contact us for specific coverage details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
