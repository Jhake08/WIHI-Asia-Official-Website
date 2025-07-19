
'use client';

export default function LifeAtCompany() {
  const galleryImages = [
    {
      src: 'https://readdy.ai/api/search-image?query=Modern%20tech%20office%20team%20collaboration%20session%20with%20diverse%20professionals%20working%20together%2C%20contemporary%20workspace%20with%20natural%20lighting%2C%20brainstorming%20and%20creative%20problem%20solving%20atmosphere%2C%20innovative%20company%20culture%20environment&width=400&height=300&seq=office-collab&orientation=landscape',
      alt: 'Team collaboration session'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Company%20team%20building%20event%20with%20employees%20having%20fun%20and%20celebrating%20together%2C%20casual%20office%20party%20atmosphere%20with%20food%20and%20drinks%2C%20positive%20workplace%20culture%20and%20employee%20engagement%20activities&width=400&height=300&seq=team-building&orientation=landscape',
      alt: 'Team building event'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Professional%20presentation%20and%20training%20session%20in%20modern%20conference%20room%2C%20employees%20learning%20and%20developing%20skills%2C%20corporate%20education%20and%20professional%20development%20environment%20with%20presentation%20screens&width=400&height=300&seq=training-session&orientation=landscape',
      alt: 'Training and development'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Relaxed%20office%20break%20area%20with%20employees%20taking%20coffee%20break%20and%20casual%20conversations%2C%20modern%20workplace%20lounge%20with%20comfortable%20seating%2C%20work-life%20balance%20and%20social%20interaction%20space&width=400&height=300&seq=coffee-break&orientation=landscape',
      alt: 'Coffee break area'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Remote%20work%20setup%20showing%20employee%20working%20from%20home%20office%2C%20professional%20home%20workspace%20with%20modern%20equipment%2C%20flexible%20work%20arrangements%20and%20work-life%20balance%20demonstration&width=400&height=300&seq=remote-work&orientation=landscape',
      alt: 'Remote work culture'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Company%20achievement%20celebration%20with%20team%20members%20celebrating%20success%2C%20office%20party%20with%20awards%20and%20recognition%20ceremony%2C%20positive%20workplace%20culture%20and%20employee%20appreciation%20event&width=400&height=300&seq=celebration&orientation=landscape',
      alt: 'Success celebration'
    }
  ];

  const testimonials = [
    {
      quote: "The growth opportunities here are incredible. I've learned more in 2 years than I did in my previous 5 years elsewhere.",
      name: "Sarah Kim",
      role: "Senior Developer",
      tenure: "2 years"
    },
    {
      quote: "The work-life balance is genuine, not just a buzzword. I can be productive while still having time for my family.",
      name: "Marcus Rodriguez",
      role: "Marketing Manager",
      tenure: "3 years"
    },
    {
      quote: "The team genuinely cares about each other's success. It's collaborative, not competitive.",
      name: "Emily Chen",
      role: "UX Designer",
      tenure: "1.5 years"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Life at <span className="text-yellow-400">Our Company</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a glimpse into our daily culture, team dynamics, and the experiences that make our workplace special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.alt}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 flex items-center justify-center mr-1">
                    <i className="ri-star-fill text-yellow-400 text-sm"></i>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
                <div className="px-3 py-1 bg-yellow-600/20 border border-yellow-500/30 rounded-full text-yellow-300 text-xs">
                  {testimonial.tenure}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="p-8 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-sm border border-yellow-500/30 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Be Part of Our Story?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join a team that values innovation, collaboration, and personal growth. Your next career adventure starts here.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Apply Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
