
import React, { useEffect, useState, useRef } from 'react';
import { Users, Award, Percent, BadgePlus } from 'lucide-react';

const stats = [
  {
    id: 1,
    number: 1500,
    label: "Success Stories",
    icon: <Users className="w-8 h-8 text-driving-blue" />
  },
  {
    id: 2,
    number: 25,
    label: "Years of Experience",
    icon: <Award className="w-8 h-8 text-driving-blue" />
  },
  {
    id: 3,
    number: 96,
    label: "Passing Rate",
    icon: <Percent className="w-8 h-8 text-driving-blue" />
  },
  {
    id: 4,
    number: 4,
    label: "Expert Instructors",
    icon: <BadgePlus className="w-8 h-8 text-driving-blue" />
  }
];

const Counter = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  const hasCountedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView || hasCountedRef.current) return;
    
    hasCountedRef.current = true;
    let startTime: number | null = null;
    const start = 0;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      setCount(current);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, isInView]);

  return <span ref={countRef}>{count}</span>;
};

const SuccessStories = () => {
  return (
    <section className="py-20 bg-driving-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          Our Success by the Numbers
          <span className="block w-20 h-1 bg-white mx-auto mt-2"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <div className="mb-4 p-4 bg-white/10 rounded-full">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold">
                <Counter end={stat.number} />
                {stat.id === 3 && '%'}
              </div>
              <div className="mt-2 text-xl text-center">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
