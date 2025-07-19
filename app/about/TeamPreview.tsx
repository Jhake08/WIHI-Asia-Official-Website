
'use client';

import Link from 'next/link';

export default function TeamPreview() {
  return (
    <section className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Meet Our <span className="text-purple-400">Expert Team</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Our diverse team of specialists brings together years of experience in ecommerce, digital marketing, and technology innovation.
        </p>
        
        <div className="relative mb-12">
          <img
            src="https://readdy.ai/api/search-image?query=Professional%20diverse%20business%20team%20portrait%20in%20modern%20office%20setting%2C%20group%20of%20confident%20professionals%20from%20different%20backgrounds%20standing%20together%2C%20contemporary%20corporate%20environment%20with%20clean%20lighting%2C%20formal%20business%20attire%2C%20collaborative%20workspace%20atmosphere%2C%20unified%20team%20displaying%20expertise%20and%20professionalism&width=800&height=400&seq=team-preview&orientation=landscape"
            alt="Our professional team"
            className="rounded-2xl shadow-2xl mx-auto object-cover w-full max-w-4xl h-[400px] object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-xl">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-4">
              <i className="ri-code-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Developers</h3>
            <p className="text-gray-300">Expert programmers crafting seamless ecommerce experiences</p>
          </div>
          <div className="p-6 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-xl">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-600 rounded-full mx-auto mb-4">
              <i className="ri-megaphone-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Marketers</h3>
            <p className="text-gray-300">Strategic minds driving growth across all platforms</p>
          </div>
          <div className="p-6 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-xl">
            <div className="w-12 h-12 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-4">
              <i className="ri-customer-service-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Support</h3>
            <p className="text-gray-300">Dedicated professionals ensuring client success</p>
          </div>
        </div>

        <Link
          href="/team"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
        >
          Meet Full Team
          <div className="w-5 h-5 flex items-center justify-center ml-2">
            <i className="ri-arrow-right-line"></i>
          </div>
        </Link>
      </div>
    </section>
  );
}
