
'use client';

export default function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Digital%20ecommerce%20workspace%20with%20multiple%20platform%20interfaces%20displayed%20on%20modern%20monitors%2C%20social%20media%20and%20marketplace%20dashboards%20showing%20Facebook%20TikTok%20Shopee%20Lazada%2C%20professional%20tech%20environment%20with%20data%20analytics%20charts%2C%20modern%20office%20setup%20with%20clean%20aesthetic%2C%20blue%20and%20purple%20ambient%20lighting%20creating%20professional%20atmosphere&width=1920&height=1080&seq=services-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Our <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Services</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Comprehensive ecommerce solutions tailored for Facebook, TikTok, Shopee, and Lazada platforms. We help you dominate every marketplace.
        </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <div className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm backdrop-blur-sm flex items-center gap-2 cursor-pointer">
              Facebook Commerce
              <button className="ml-2 px-3 py-1 bg-blue-600 rounded-full text-white text-xs font-semibold hover:bg-blue-700 transition-colors">
                Book Now
              </button>
            </div>
            <div className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm backdrop-blur-sm flex items-center gap-2 cursor-pointer">
              TikTok Shop
              <button className="ml-2 px-3 py-1 bg-purple-600 rounded-full text-white text-xs font-semibold hover:bg-purple-700 transition-colors">
                Book Now
              </button>
            </div>
            <div className="px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-sm backdrop-blur-sm flex items-center gap-2 cursor-pointer">
              Shopee Management
              <button className="ml-2 px-3 py-1 bg-green-600 rounded-full text-white text-xs font-semibold hover:bg-green-700 transition-colors">
                Book Now
              </button>
            </div>
            <div className="px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full text-orange-300 text-sm backdrop-blur-sm flex items-center gap-2 cursor-pointer">
              Lazada Solutions
              <button className="ml-2 px-3 py-1 bg-orange-600 rounded-full text-white text-xs font-semibold hover:bg-orange-700 transition-colors">
                Book Now
              </button>
            </div>
            <div className="px-4 py-2 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm backdrop-blur-sm flex items-center gap-2 cursor-pointer">
              Travel Agency
              <button className="ml-2 px-3 py-1 bg-cyan-600 rounded-full text-white text-xs font-semibold hover:bg-cyan-700 transition-colors">
                Book Now
              </button>
            </div>
            <div className="px-4 py-2 bg-pink-600/20 border border-pink-500/30 rounded-full text-pink-300 text-sm backdrop-blur-sm flex items-center gap-2 cursor-pointer">
              Salon Spa
              <button className="ml-2 px-3 py-1 bg-pink-600 rounded-full text-white text-xs font-semibold hover:bg-pink-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer backdrop-blur-sm">
            Get Started Today
          </button>
      </div>
    </section>
  );
}
