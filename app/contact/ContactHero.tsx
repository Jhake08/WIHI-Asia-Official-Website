
'use client';

export default function ContactHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20business%20communication%20and%20customer%20service%20concept%2C%20modern%20office%20environment%20with%20communication%20tools%20and%20technology%2C%20contact%20us%20and%20client%20support%20atmosphere%20with%20clean%20professional%20lighting%2C%20corporate%20consultation%20setting&width=1920&height=1080&seq=contact-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Ready to transform your ecommerce business? Let's discuss how we can help you succeed across all major platforms.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center px-4 py-2 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-full">
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-time-line text-cyan-400 text-sm"></i>
            </div>
            <span className="text-gray-300 text-sm">24/7 Support</span>
          </div>
          <div className="flex items-center px-4 py-2 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-full">
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-phone-line text-cyan-400 text-sm"></i>
            </div>
            <span className="text-gray-300 text-sm">Free Consultation</span>
          </div>
          <div className="flex items-center px-4 py-2 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-full">
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-mail-line text-cyan-400 text-sm"></i>
            </div>
            <span className="text-gray-300 text-sm">Quick Response</span>
          </div>
        </div>
        
        <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer backdrop-blur-sm">
          Start Free Consultation
        </button>
      </div>
    </section>
  );
}
