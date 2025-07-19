
'use client';

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20building%20with%20glass%20facade%20reflecting%20city%20lights%20at%20sunset%2C%20professional%20business%20environment%20with%20sleek%20architecture%2C%20contemporary%20design%20elements%2C%20urban%20skyline%20backdrop%2C%20warm%20golden%20lighting%20creating%20elegant%20atmosphere%2C%20minimalist%20corporate%20aesthetic%20with%20clean%20lines%20and%20geometric%20patterns&width=1920&height=1080&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Our Story</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Pioneering ecommerce excellence across multiple platforms since 2020. We transform brands into digital powerhouses through innovative strategies and cutting-edge technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer backdrop-blur-sm">
            Our Mission
          </button>
          <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 whitespace-nowrap cursor-pointer backdrop-blur-sm">
            Company Timeline
          </button>
        </div>
      </div>
    </section>
  );
}
