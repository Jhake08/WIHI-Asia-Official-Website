
'use client';

export default function DepartmentsSection() {
  const departments = [
    {
      name: 'Management',
      memberCount: 15,
      description: 'Leading strategic vision, operational excellence, and cross-department collaboration to drive ecommerce success.',
      icon: 'ri-code-line',
      color: 'from-blue-600 to-cyan-600',
      skills: ['Strategic Planning', 'Team Leadership', 'KPI Analysis', 'Budgeting', 'Process Optimization', 'Stakeholder Management', 'Risk Management']
    },
    {
      name: 'Facebook Department',
      memberCount: 12,
      description: 'Driving social commerce growth through engaging Facebook campaigns and seamless shopping experiences.',
      icon: 'ri-megaphone-line',
      color: 'from-yellow-500 to-orange-500',
      skills: ['Facebook Ads', 'Meta Business Suite', 'Audience Targeting', 'Social Media Analytics', 'Content Creation', 'Conversion Rate Optimization', 'A/B Testing']
    },
    {
      name: 'Tiktok Department',
      memberCount: 8,
      description: 'Harnessing the power of viral content to boost ecommerce sales on TikTok’s dynamic platform.',
      icon: 'ri-palette-line',
      color: 'from-green-600 to-teal-600',
      skills: ['TikTok Ads', 'Viral Content Strategy', 'Short-Form Video Editing', 'Influencer Collaboration', 'Hashtag Optimization', 'TikTok Shop', 'Live Commerce']
    },
    {
      name: 'Shopee Department',
      memberCount: 6,
      description: 'Optimizing Shopee storefronts and campaigns to maximize conversions and marketplace success.',
      icon: 'ri-bar-chart-line',
      color: 'from-orange-600 to-red-600',
      skills: ['Shopee Seller Center', 'Product SEO', 'Flash Sales', 'Shopee Live', 'Affiliate Marketing', 'Pricing Analysis', 'Order Fulfillment']
    },
    {
      name: 'Lazada Department',
      memberCount: 10,
      description: 'Delivering high-performance Lazada store strategies to enhance visibility and sales.',
      icon: 'ri-customer-service-line',
      color: 'from-yellow-600 to-orange-600',
      skills: ['Lazada Seller Hub', 'Sponsored Ads', 'LazMall', 'Cross-Border Logistics', 'Promotion Strategy', 'Lazada Live', 'ROI Tracking']
    },
    {
      name: 'Logistics Department',
      memberCount: 5,
      description: 'Ensuring fast, reliable, and cost-effective delivery solutions for a seamless customer experience.',
      icon: 'ri-settings-line',
      color: 'from-gray-600 to-gray-800',
      skills: ['Supply Chain Management', 'Last-Mile Delivery', 'Warehouse Management', 'Shipping Negotiation', 'Reverse Logistics', 'Real-Time Tracking']
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-orange-400">Departments</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized teams working together to deliver comprehensive ecommerce solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="group p-8 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${dept.color} rounded-full mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${dept.icon} text-white text-2xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{dept.name}</h3>
                  <p className="text-gray-400 text-sm">{dept.memberCount} team members</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{dept.description}</p>
              
              <div>
                <h4 className="text-white font-medium mb-3">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {dept.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full hover:bg-gray-700 transition-colors"
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
