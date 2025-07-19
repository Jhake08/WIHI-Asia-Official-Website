
'use client';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business, target audience, and current performance to create a tailored strategy.',
      icon: 'ri-search-line'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Our experts craft a comprehensive plan optimized for your chosen platforms and goals.',
      icon: 'ri-lightbulb-line'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We execute the strategy with precision, setting up stores, campaigns, and optimization systems.',
      icon: 'ri-tools-line'
    },
    {
      number: '04',
      title: 'Optimization & Scaling',
      description: 'Continuous monitoring and improvement to maximize ROI and scale your business growth.',
      icon: 'ri-line-chart-line'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-purple-400">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that delivers consistent results for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="p-8 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                <div className="text-center">
                  <div className="text-6xl font-bold text-purple-400/20 mb-4">{step.number}</div>
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${step.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
