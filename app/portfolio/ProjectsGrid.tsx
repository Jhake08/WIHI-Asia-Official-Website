
'use client';

import { useState } from 'react';

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Facebook', 'TikTok', 'Shopee', 'Lazada'];

  const projects = [
    {
      title: 'Fashion Forward Boutique',
      category: 'Facebook',
      platform: 'Facebook Commerce',
      result: '+400% Revenue Growth',
      image: 'https://readdy.ai/api/search-image?query=Modern%20fashion%20boutique%20ecommerce%20store%20interface%20showing%20elegant%20clothing%20collection%2C%20Facebook%20shop%20integration%20with%20clean%20product%20displays%2C%20professional%20fashion%20retail%20website%20with%20minimalist%20design%2C%20contemporary%20online%20shopping%20experience&width=400&height=300&seq=fashion-facebook&orientation=landscape',
      description: 'Complete Facebook Shop setup with Instagram integration for a luxury fashion brand.'
    },
    {
      title: 'Tech Gadgets Store',
      category: 'TikTok',
      platform: 'TikTok Shop',
      result: '+600% Sales Increase',
      image: 'https://readdy.ai/api/search-image?query=Technology%20gadgets%20showcase%20on%20TikTok%20shop%20interface%2C%20modern%20electronics%20and%20accessories%20display%2C%20mobile-first%20ecommerce%20platform%20with%20vibrant%20product%20presentations%2C%20tech%20retail%20environment%20with%20sleek%20product%20photography&width=400&height=300&seq=tech-tiktok&orientation=landscape',
      description: 'Live shopping events and influencer partnerships driving massive growth.'
    },
    {
      title: 'Home Decor Paradise',
      category: 'Shopee',
      platform: 'Shopee Marketplace',
      result: '+350% Monthly Sales',
      image: 'https://readdy.ai/api/search-image?query=Home%20decor%20and%20furniture%20products%20displayed%20on%20Shopee%20marketplace%20interface%2C%20cozy%20interior%20design%20items%20and%20accessories%2C%20professional%20product%20photography%20with%20warm%20lighting%2C%20Southeast%20Asian%20ecommerce%20platform%20design&width=400&height=300&seq=home-shopee&orientation=landscape',
      description: 'Strategic product positioning and optimization for Southeast Asian market.'
    },
    {
      title: 'Beauty & Wellness',
      category: 'Lazada',
      platform: 'Lazada Store',
      result: '+500% Market Reach',
      image: 'https://readdy.ai/api/search-image?query=Beauty%20and%20wellness%20products%20showcase%20on%20Lazada%20marketplace%2C%20skincare%20and%20cosmetics%20display%20with%20elegant%20product%20presentation%2C%20professional%20beauty%20retail%20environment%2C%20clean%20and%20modern%20ecommerce%20interface&width=400&height=300&seq=beauty-lazada&orientation=landscape',
      description: 'Cross-border expansion with localized marketing strategies.'
    },
    {
      title: 'Fitness Equipment Co',
      category: 'Facebook',
      platform: 'Facebook & Instagram',
      result: '+300% Lead Generation',
      image: 'https://readdy.ai/api/search-image?query=Professional%20fitness%20equipment%20and%20gym%20accessories%20displayed%20on%20Facebook%20business%20page%2C%20modern%20workout%20gear%20and%20health%20products%2C%20athletic%20retail%20environment%20with%20dynamic%20product%20photography%2C%20fitness%20ecommerce%20interface&width=400&height=300&seq=fitness-facebook&orientation=landscape',
      description: 'Comprehensive social media commerce strategy with video marketing.'
    },
    {
      title: 'Artisan Coffee Shop',
      category: 'TikTok',
      platform: 'TikTok Commerce',
      result: '+450% Brand Awareness',
      image: 'https://readdy.ai/api/search-image?query=Artisan%20coffee%20products%20and%20brewing%20equipment%20on%20TikTok%20shop%2C%20premium%20coffee%20beans%20and%20accessories%20display%2C%20cozy%20coffee%20shop%20atmosphere%20with%20warm%20lighting%2C%20specialty%20beverage%20retail%20environment&width=400&height=300&seq=coffee-tiktok&orientation=landscape',
      description: 'Viral content strategy with product integration and live demonstrations.'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our successful ecommerce implementations across different platforms.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-black/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 object-top"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full">
                  {project.platform}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-green-400 font-semibold text-sm">{project.result}</div>
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full group-hover:bg-blue-500 transition-colors">
                    <i className="ri-arrow-right-line text-white text-sm"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
