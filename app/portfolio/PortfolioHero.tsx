
'use client';

export default function PortfolioHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Digital%20portfolio%20showcase%20displaying%20multiple%20ecommerce%20success%20stories%20on%20screens%2C%20modern%20tech%20workspace%20with%20data%20visualization%20charts%20showing%20growth%20metrics%2C%20professional%20business%20environment%20with%20analytics%20dashboards%2C%20sleek%20contemporary%20office%20with%20purple%20and%20blue%20ambient%20lighting&width=1920&height=1080&seq=portfolio-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Our <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Discover the success stories of businesses we've transformed across Facebook, TikTok, Shopee, and Lazada platforms.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="p-4 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-lg">
            <div className="text-2xl font-bold text-green-400 mb-1">500+</div>
            <div className="text-gray-300 text-sm">Projects</div>
          </div>
          <div className="p-4 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-lg">
            <div className="text-2xl font-bold text-blue-400 mb-1">$50M+</div>
            <div className="text-gray-300 text-sm">Revenue</div>
          </div>
          <div className="p-4 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-lg">
            <div className="text-2xl font-bold text-purple-400 mb-1">300%</div>
            <div className="text-gray-300 text-sm">Avg Growth</div>
          </div>
          <div className="p-4 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-lg">
            <div className="text-2xl font-bold text-yellow-400 mb-1">99%</div>
            <div className="text-gray-300 text-sm">Success Rate</div>
          </div>
        </div>
        <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer backdrop-blur-sm">
          View Case Studies
        </button>
      </div>
    </section>
  );
}
