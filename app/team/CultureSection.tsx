
'use client';

export default function CultureSection() {
  const values = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and embrace new technologies to stay ahead of the curve.',
      icon: 'ri-lightbulb-line'
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible schedules, remote work options, and mental health support for all team members.',
      icon: 'ri-scales-line'
    },
    {
      title: 'Continuous Learning',
      description: 'Regular training, conferences, and skill development opportunities for professional growth.',
      icon: 'ri-book-line'
    },
    {
      title: 'Diversity & Inclusion',
      description: 'Building a team that reflects the diversity of our global client base and perspectives.',
      icon: 'ri-group-line'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-purple-400">Culture</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We believe that great work comes from great people who feel valued, supported, and inspired. Our culture is built on collaboration, innovation, and mutual respect.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-600 rounded-full mr-4 flex-shrink-0">
                    <i className={`${value.icon} text-white text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Happy%20diverse%20team%20celebrating%20success%20in%20modern%20office%20environment%2C%20collaborative%20workspace%20with%20people%20from%20different%20backgrounds%20working%20together%2C%20positive%20company%20culture%20atmosphere%20with%20natural%20lighting%2C%20team%20building%20and%20achievement%20celebration&width=600&height=500&seq=team-culture&orientation=landscape"
              alt="Team culture"
              className="rounded-2xl shadow-2xl object-cover w-full h-[500px] object-top"
            />
            <div className="absolute -bottom-6 -left-6 p-6 bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-xl">
              <div className="text-2xl font-bold text-purple-400 mb-1">4.9/5</div>
              <div className="text-gray-300 text-sm">Employee Satisfaction</div>
            </div>
            <div className="absolute -top-6 -right-6 p-6 bg-black/80 backdrop-blur-sm border border-yellow-500/30 rounded-xl">
              <div className="text-2xl font-bold text-yellow-400 mb-1">2+</div>
              <div className="text-gray-300 text-sm">Years Avg Tenure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
