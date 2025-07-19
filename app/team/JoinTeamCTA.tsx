
'use client';

import Link from 'next/link';

export default function JoinTeamCTA() {
  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Cutting-edge equipment',
    'Unlimited PTO policy'
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to <span className="text-yellow-400">Join Us?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          We're always looking for talented individuals who share our passion for ecommerce innovation. Join our team and help shape the future of digital commerce.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-lg hover:border-yellow-500/50 transition-colors"
            >
              <div className="w-4 h-4 flex items-center justify-center mr-3">
                <i className="ri-check-line text-yellow-400 text-sm"></i>
              </div>
              <span className="text-gray-300 text-sm">{benefit}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/careers"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            View Open Positions
            <div className="w-5 h-5 flex items-center justify-center ml-2">
              <i className="ri-arrow-right-line"></i>
            </div>
          </Link>
          <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 whitespace-nowrap cursor-pointer">
            Send Resume
          </button>
        </div>
      </div>
    </section>
  );
}
