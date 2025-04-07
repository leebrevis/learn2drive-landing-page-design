
import React from 'react';

const roadSigns = [
  {
    id: 1,
    name: "Stop",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/MUTCD_R1-1.svg",
    color: "bg-red-500"
  },
  {
    id: 2,
    name: "Yield",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/MUTCD_R1-2.svg",
    color: "bg-red-500"
  },
  {
    id: 3,
    name: "Speed Limit",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/MUTCD_R2-1_-_Speed_Limit_30.svg",
    color: "bg-white"
  },
  {
    id: 4,
    name: "Wrong Way",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/MUTCD_R5-1a.svg",
    color: "bg-red-500"
  },
  {
    id: 5,
    name: "No U-Turn",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/66/MUTCD_R3-4.svg",
    color: "bg-red-500"
  },
  {
    id: 6,
    name: "No Left Turn",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/MUTCD_R3-2.svg",
    color: "bg-red-500"
  },
  {
    id: 7,
    name: "School Crossing",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/MUTCD_S1-1.svg",
    color: "bg-yellow-300"
  },
  {
    id: 8,
    name: "Railroad Crossing",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/MUTCD_R15-1.svg",
    color: "bg-yellow-300"
  }
];

const RoadSigns = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Basic Road Signs</h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {roadSigns.map((sign) => (
            <div key={sign.id} className="flex flex-col items-center">
              <div className={`road-sign ${sign.color} border border-gray-200`}>
                <img 
                  src={sign.image} 
                  alt={sign.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">{sign.name}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="text-driving-blue font-medium hover:underline">
            View all road signs →
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoadSigns;
