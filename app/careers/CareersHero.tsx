
'use client';

export default function CareersHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20tech%20office%20recruitment%20and%20career%20opportunities%2C%20diverse%20professionals%20working%20in%20innovative%20workspace%20environment%2C%20contemporary%20office%20design%20with%20open%20collaboration%20areas%2C%20career%20growth%20and%20professional%20development%20atmosphere%20with%20bright%20lighting&width=1920&height=1080&seq=careers-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Launch Your <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Career</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Join our mission to revolutionize ecommerce. Work with cutting-edge technology, collaborate with industry experts, and make a real impact on businesses worldwide.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-sm backdrop-blur-sm">
            Remote-First Culture
          </div>
          <div className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm backdrop-blur-sm">
            Growth Opportunities
          </div>
          <div className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm backdrop-blur-sm">
            Competitive Benefits
          </div>
          <div className="px-4 py-2 bg-yellow-600/20 border border-yellow-500/30 rounded-full text-yellow-300 text-sm backdrop-blur-sm">
            Innovation Focus
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-lg">
            <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
            <div className="text-gray-300">Open Positions</div>
          </div>
          <div className="p-4 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-lg">
            <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
            <div className="text-gray-300">Employee Satisfaction</div>
          </div>
          <div className="p-4 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-lg">
            <div className="text-3xl font-bold text-purple-400 mb-2">4.8★</div>
            <div className="text-gray-300">Glassdoor Rating</div>
          </div>
        </div>
        
        <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer backdrop-blur-sm">
          View Open Positions
        </button>
      </div>
    </section>
  );
}
