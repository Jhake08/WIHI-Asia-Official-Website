
'use client';

import { useEffect, useState } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '500', suffix: '+', label: 'Active Clients', icon: 'ri-group-line' },
    { number: '50', suffix: 'M+', label: 'Revenue Generated', icon: 'ri-money-dollar-circle-line' },
    { number: '99', suffix: '%', label: 'Client Satisfaction', icon: 'ri-heart-line' },
    { number: '4', suffix: '+', label: 'Platforms Mastered', icon: 'ri-store-line' }
  ];

  return (
    <section id="stats-section" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Impact</span>
          </h2>
          <p className="text-xl text-gray-300">
            Numbers that speak to our commitment and success in the ecommerce industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6">
                <i className={`${stat.icon} text-white text-2xl`}></i>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <span className={`${isVisible ? 'animate-pulse' : ''}`}>
                  {stat.number}
                </span>
                <span className="text-blue-400">{stat.suffix}</span>
              </div>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
