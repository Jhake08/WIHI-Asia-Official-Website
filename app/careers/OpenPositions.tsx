
'use client';

import { useState } from 'react';

export default function OpenPositions() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Engineering', 'Marketing', 'Design', 'Sales', 'Operations'];

  const positions = [
    {
      title: 'Senior React Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      salary: '$90k - $130k',
      description: 'Build scalable ecommerce applications using React, TypeScript, and modern web technologies.',
      requirements: ['5+ years React experience', 'TypeScript proficiency', 'E-commerce background preferred'],
      posted: '2 days ago'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      type: 'Full-time',
      location: 'San Francisco / Remote',
      salary: '$70k - $95k',
      description: 'Drive growth through strategic social media campaigns across Facebook, TikTok, and other platforms.',
      requirements: ['3+ years digital marketing', 'Social commerce experience', 'Analytics proficiency'],
      posted: '1 week ago'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'Remote',
      salary: '$80k - $110k',
      description: 'Design intuitive ecommerce experiences that convert visitors into customers.',
      requirements: ['4+ years UX/UI design', 'Figma expertise', 'E-commerce design portfolio'],
      posted: '3 days ago'
    },
    {
      title: 'Sales Development Representative',
      department: 'Sales',
      type: 'Full-time',
      location: 'New York / Remote',
      salary: '$60k - $80k + Commission',
      description: 'Generate qualified leads and build relationships with potential ecommerce clients.',
      requirements: ['2+ years B2B sales', 'CRM experience', 'Excellent communication skills'],
      posted: '5 days ago'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      salary: '$100k - $140k',
      description: 'Manage cloud infrastructure and deployment pipelines for high-traffic ecommerce platforms.',
      requirements: ['AWS/GCP experience', 'Docker & Kubernetes', 'CI/CD pipeline management'],
      posted: '1 day ago'
    },
    {
      title: 'Content Marketing Manager',
      department: 'Marketing',
      type: 'Full-time',
      location: 'Remote',
      salary: '$75k - $100k',
      description: 'Create compelling content that educates and engages our target audience.',
      requirements: ['4+ years content marketing', 'SEO knowledge', 'B2B SaaS experience'],
      posted: '4 days ago'
    }
  ];

  const filteredPositions = activeFilter === 'All' 
    ? positions 
    : positions.filter(position => position.department === activeFilter);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Open <span className="text-green-400">Positions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Find your perfect role and join our team of passionate professionals building the future of ecommerce.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredPositions.map((position, index) => (
            <div
              key={index}
              className="group p-8 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-green-500/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-sm">
                          {position.department}
                        </span>
                        <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm">
                          {position.type}
                        </span>
                        <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                          {position.location}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-white">{position.salary}</div>
                      <div className="text-gray-400 text-sm">{position.posted}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{position.description}</p>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Requirements</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-gray-300 text-sm">
                          <div className="w-4 h-4 flex items-center justify-center mr-2">
                            <i className="ri-check-line text-green-400 text-xs"></i>
                          </div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="lg:col-span-2 flex flex-col justify-center space-y-4">
                  <button className="w-full py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
                    Apply Now
                  </button>
                  <button className="w-full py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 whitespace-nowrap cursor-pointer">
                    Save for Later
                  </button>
                  <div className="text-center">
                    <button className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
                      Share Position
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredPositions.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-full mx-auto mb-4">
              <i className="ri-search-line text-gray-400 text-2xl"></i>
            </div>
            <h3 className="text-xl text-white mb-2">No positions found</h3>
            <p className="text-gray-400">Try adjusting your filter or check back later for new opportunities.</p>
          </div>
        )}
      </div>
    </section>
  );
}
