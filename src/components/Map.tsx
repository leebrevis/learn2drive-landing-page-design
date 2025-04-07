
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      // Initialize the map
      const map = L.map(mapRef.current).setView([51.505, -0.09], 13);
      
      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      // Add a marker for the driving school
      const schoolIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/3097/3097144.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
      });
      
      L.marker([51.505, -0.09], { icon: schoolIcon })
        .addTo(map)
        .bindPopup('<strong>Learn2Drive Headquarters</strong><br>123 Driving Avenue<br>Contact: 123-456-7890')
        .openPopup();
      
      // Save map instance to ref
      mapInstanceRef.current = map;
      
      // Add control to map
      L.control.scale().addTo(map);
    }
    
    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Find Us</h2>
        
        <div className="max-w-5xl mx-auto">
          <div 
            ref={mapRef} 
            className="h-96 rounded-lg shadow-lg border border-gray-200"
          ></div>
          
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
