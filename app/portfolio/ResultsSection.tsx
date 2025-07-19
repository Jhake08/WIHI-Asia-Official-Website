
'use client';

export default function ResultsSection() {
  const results = [
    {
      metric: 'Average Revenue Increase',
      value: '340%',
      description: 'Across all client projects within 6 months',
      icon: 'ri-line-chart-line',
      color: 'from-green-600 to-green-800'
    },
    {
      metric: 'Client Retention Rate',
      value: '96%',
      description: 'Long-term partnerships built on trust',
      icon: 'ri-heart-line',
      color: 'from-red-600 to-pink-600'
    },
    {
      metric: 'Platform Success Rate',
      value: '99.2%',
      description: 'Successful store launches and optimizations',
      icon: 'ri-trophy-line',
      color: 'from-yellow-600 to-orange-600'
    },
    {
      metric: 'ROI Achievement',
      value: '450%',
      description: 'Average return on marketing investment',
      icon: 'ri-money-dollar-circle-line',
      color: 'from-blue-600 to-purple-600'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven <span className="text-green-400">Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. Here are the metrics that matter most to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="text-center p-8 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-green-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className={`w-20 h-20 flex items-center justify-center bg-gradient-to-r ${result.color} rounded-full mx-auto mb-6`}>
                <i className={`${result.icon} text-white text-3xl`}></i>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{result.value}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{result.metric}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{result.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let us help you achieve similar results. Our proven strategies and dedicated team are ready to transform your ecommerce business.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
