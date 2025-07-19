
'use client';

export default function TeamHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Diverse%20professional%20team%20of%20experts%20working%20collaboratively%20in%20modern%20tech%20office%2C%20multicultural%20group%20of%20specialists%20in%20open%20workspace%20environment%2C%20contemporary%20business%20setting%20with%20natural%20lighting%2C%20team%20collaboration%20and%20innovation%20atmosphere%2C%20professional%20corporate%20culture&width=1920&height=1080&seq=team-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Meet Our <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">Expert Team</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Behind every successful ecommerce transformation is a dedicated team of specialists passionate about driving your growth across all platforms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-lg">
            <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-gray-300">Team Members</div>
          </div>
          <div className="p-4 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-lg">
            <div className="text-3xl font-bold text-orange-400 mb-2">12+</div>
            <div className="text-gray-300">Departments</div>
          </div>
          <div className="p-4 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-lg">
            <div className="text-3xl font-bold text-red-400 mb-2">8+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </div>
        <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer backdrop-blur-sm">
          Join Our Team
        </button>
      </div>
    </section>
  );
}
