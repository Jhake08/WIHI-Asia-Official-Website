
'use client';

export default function ValuesSection() {
  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions for our clients.'
    },
    {
      icon: 'ri-team-line',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with our clients to achieve exceptional results.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Integrity',
      description: 'Transparency and honesty are at the core of everything we do. We build trust through reliable partnerships.'
    },
    {
      icon: 'ri-trophy-line',
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring our clients receive the highest quality service.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Core <span className="text-purple-400">Values</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These principles guide everything we do and shape the way we work with our clients and partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${value.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
