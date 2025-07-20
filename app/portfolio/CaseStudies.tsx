
'use client';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Fashion Brand TikTok Transformation',
      client: 'StyleHub Fashion',
      challenge: 'Zero presence on TikTok with declining traditional sales',
      solution: 'Comprehensive TikTok Shop setup with influencer partnerships and viral content strategy',
      results: [
        '600% increase in monthly revenue',
        '2.5M+ video views in first month',
        '85% of sales from TikTok within 3 months'
      ],
      image: 'https://readdy.ai/api/search-image?query=Fashion%20brand%20transformation%20case%20study%20showing%20before%20and%20after%20analytics%20dashboard%2C%20TikTok%20commerce%20success%20metrics%20with%20growth%20charts%2C%20professional%20business%20presentation%20displaying%20viral%20fashion%20content%20performance%20and%20sales%20data&width=500&height=300&seq=fashion-case-study&orientation=landscape',
      platform: 'TikTok',
      duration: '3 months'
    },
    {
      title: 'Electronics Store Shopee Domination',
      client: 'TechMax Electronics',
      challenge: 'High competition and low visibility in Southeast Asian markets',
      solution: 'Strategic product positioning, localized marketing, and advanced SEO optimization',
      results: [
        '400% increase in organic traffic',
        'Top 5 ranking in electronics category',
        '$2M+ additional annual revenue'
      ],
      image: 'https://readdy.ai/api/search-image?query=Electronics%20store%20success%20case%20study%20on%20Shopee%20marketplace%2C%20comprehensive%20analytics%20dashboard%20showing%20sales%20growth%20and%20market%20position%20improvements%2C%20professional%20business%20metrics%20presentation%20with%20orange%20theme%20and%20Southeast%20Asian%20market%20data&width=500&height=300&seq=electronics-case-study&orientation=landscape',
      platform: 'Shopee',
      duration: '6 months'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Detailed <span className="text-purple-400">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep dive into our most successful transformations and learn how we achieved remarkable results.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                      {study.platform}
                    </div>
                    <div className="px-3 py-1 bg-gray-600/20 border border-gray-500/30 rounded-full text-gray-300 text-sm">
                      {study.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-lg text-gray-300 mb-6 font-medium">{study.client}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-gray-300">
                            <div className="w-4 h-4 flex items-center justify-center mr-3">
                              <i className="ri-check-line text-green-400 text-sm"></i>
                            </div>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px] object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
            Request Full Case Study
          </button>
        </div>
      </div>
    </section>
  );
}
