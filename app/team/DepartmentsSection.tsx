'use client';

export default function DepartmentsSection() {
  const departments = [
    {
      name: 'Facebook Department',
      memberCount: 12,
      description: 'Driving social commerce growth through engaging Facebook campaigns and seamless shopping experiences.',
      icon: 'ri-megaphone-line',
      color: 'from-yellow-500 to-orange-500',
      image: '/images/facebook.jpg',
      skills: ['Facebook Ads', 'Meta Business Suite', 'Audience Targeting', 'Social Media Analytics', 'Content Creation', 'Conversion Rate Optimization', 'A/B Testing']
    },
    {
      name: 'Tiktok Department',
      memberCount: 8,
      description: 'Harnessing the power of viral content to boost ecommerce sales on TikTok’s dynamic platform.',
      icon: 'ri-palette-line',
      color: 'from-green-600 to-teal-600',
      image: '/images/tiktok.jpg',
      skills: ['TikTok Ads', 'Viral Content Strategy', 'Short-Form Video Editing', 'Influencer Collaboration', 'Hashtag Optimization', 'TikTok Shop', 'Live Commerce']
    },
    {
      name: 'Shopee Department',
      memberCount: 6,
      description: 'Optimizing Shopee storefronts and campaigns to maximize conversions and marketplace success.',
      icon: 'ri-bar-chart-line',
      color: 'from-orange-600 to-red-600',
      image: '/images/Nica Shopee.png',
      skills: ['Shopee Seller Center', 'Product SEO', 'Flash Sales', 'Shopee Live', 'Affiliate Marketing', 'Pricing Analysis', 'Order Fulfillment']
    },
    {
      name: 'Lazada Department',
      memberCount: 10,
      description: 'Delivering high-performance Lazada store strategies to enhance visibility and sales.',
      icon: 'ri-customer-service-line',
      color: 'from-yellow-600 to-orange-600',
      image: '/images/lazada.jpg',
      skills: ['Lazada Seller Hub', 'Sponsored Ads', 'LazMall', 'Cross-Border Logistics', 'Promotion Strategy', 'Lazada Live', 'ROI Tracking']
    },
    {
      name: 'Logistics Department',
      memberCount: 5,
      description: 'Ensuring fast, reliable, and cost-effective delivery solutions for a seamless customer experience.',
      icon: 'ri-settings-line',
      color: 'from-gray-600 to-gray-800',
      image: '/images/logistics.jpg',
      skills: ['Supply Chain Management', 'Last-Mile Delivery', 'Warehouse Management', 'Shipping Negotiation', 'Reverse Logistics', 'Real-Time Tracking']
    },
    {
      name: 'I.T Department',
      memberCount: 7,
      description: 'Managing and maintaining IT infrastructure, ensuring seamless technology operations.',
      icon: 'ri-computer-line',
      color: 'from-indigo-600 to-blue-600',
      image: '/images/it-department.jpg',
      skills: ['Network Management', 'System Administration', 'Cybersecurity', 'Technical Support', 'Cloud Services']
    },
    {
      name: 'PAJU Travel and Tour',
      memberCount: 9,
      description: 'Providing exceptional travel and tour services with personalized customer experiences.',
      icon: 'ri-plane-line',
      color: 'from-pink-500 to-red-500',
      image: '/images/paju-travel.jpg',
      skills: ['Travel Planning', 'Customer Service', 'Itinerary Management', 'Booking Coordination', 'Tour Guides']
    },
    {
      name: 'France Salon and Spa',
      memberCount: 6,
      description: 'Offering premium salon and spa services with a focus on relaxation and wellness.',
      icon: 'ri-scissors-line',
      color: 'from-purple-600 to-pink-600',
      image: '/images/france-salon.jpg',
      skills: ['Hair Styling', 'Skin Care', 'Massage Therapy', 'Customer Care', 'Product Knowledge']
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Departments</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized teams working together to deliver comprehensive ecommerce solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="group bg-black/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="flex items-center mb-4 p-6">
                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${dept.color} rounded-full mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${dept.icon} text-white text-2xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{dept.name}</h3>
                  <p className="text-yellow-400 font-medium text-sm">{dept.memberCount} team members</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 px-6 leading-relaxed">{dept.description}</p>

              <div className="px-6 pb-6">
                <h4 className="text-white font-medium text-sm mb-2">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {dept.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
