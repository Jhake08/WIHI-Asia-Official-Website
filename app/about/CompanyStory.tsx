
'use client';

export default function CompanyStory() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Building Digital <span className="text-blue-400">Excellence</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              The company started as a part-time venture, driven by the need to find a livelihood to
              support the CEO and their family. They were searching for a source of income that would uplift
              their lives, increase their earnings, and provide for their family
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Today, we manage over 500+ successful stores across Facebook, TikTok, Shopee, and Lazada, generating millions in revenue for our clients. Our data-driven approach and innovative strategies have made us the preferred partner for businesses looking to scale their online presence.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Active Stores</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400 mb-2">$50M+</div>
                <div className="text-gray-300">Revenue Generated</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20business%20team%20working%20collaboratively%20in%20modern%20office%20space%2C%20diverse%20group%20of%20people%20analyzing%20data%20on%20multiple%20screens%2C%20contemporary%20workspace%20with%20glass%20walls%20and%20modern%20furniture%2C%20natural%20lighting%20creating%20productive%20atmosphere%2C%20technology-focused%20environment%20with%20digital%20displays%20showing%20analytics%20and%20growth%20charts&width=600&height=400&seq=company-story&orientation=landscape"
              alt="Our team at work"
              className="rounded-2xl shadow-2xl object-cover w-full h-[400px] object-top"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="w-12 h-12 flex items-center justify-center">
                <i className="ri-rocket-line text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
