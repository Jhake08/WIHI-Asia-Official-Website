'use client';

export default function DepartmentsSection() {
  const departments = [
    {
      name: 'Facebook Department',
      role: 'Department',
      bio: 'Driving social commerce growth through engaging Facebook campaigns and seamless shopping experiences.',
      image: 'https://readdy.ai/api/search-image?query=Facebook%20team%20working%20together%20in%20office&width=300&height=400&orientation=portrait',
      expertise: ['Facebook Ads', 'Meta Business Suite', 'Audience Targeting', 'Social Media Analytics', 'Content Creation', 'Conversion Rate Optimization', 'A/B Testing'],
      social: {}
    },
    {
      name: 'Tiktok Department',
      role: 'Department',
      bio: 'Harnessing the power of viral content to boost ecommerce sales on TikTok’s dynamic platform.',
      image: 'https://readdy.ai/api/search-image?query=TikTok%20marketing%20team%20collaborating&width=300&height=400&orientation=portrait',
      expertise: ['TikTok Ads', 'Viral Content Strategy', 'Short-Form Video Editing', 'Influencer Collaboration', 'Hashtag Optimization', 'TikTok Shop', 'Live Commerce'],
      social: {}
    },
    {
      name: 'Shopee Department',
      role: 'Department',
      bio: 'Optimizing Shopee storefronts and campaigns to maximize conversions and marketplace success.',
      image: 'https://readdy.ai/api/search-image?query=Shopee%20ecommerce%20team%20working&width=300&height=400&orientation=portrait',
      expertise: ['Shopee Seller Center', 'Product SEO', 'Flash Sales', 'Shopee Live', 'Affiliate Marketing', 'Pricing Analysis', 'Order Fulfillment'],
      social: {}
    },
    {
      name: 'Lazada Department',
      role: 'Department',
      bio: 'Delivering high-performance Lazada store strategies to enhance visibility and sales.',
      image: 'https://readdy.ai/api/search-image?query=Lazada%20ecommerce%20team%20collaborating&width=300&height=400&orientation=portrait',
      expertise: ['Lazada Seller Hub', 'Sponsored Ads', 'LazMall', 'Cross-Border Logistics', 'Promotion Strategy', 'Lazada Live', 'ROI Tracking'],
      social: {}
    },
    {
      name: 'Distributorship Department',
      role: 'Department',
      bio: 'Managing distribution channels to ensure product availability and market penetration.',
      image: 'https://readdy.ai/api/search-image?query=Distribution%20team%20working%20together&width=300&height=400&orientation=portrait',
      expertise: ['Channel Management', 'Inventory Control', 'Sales Strategy', 'Partner Relations', 'Logistics Coordination'],
      social: {}
    },
    {
      name: 'PAJU Travel & Tour Department',
      role: 'Department',
      bio: 'Providing travel and tour services with exceptional customer experience and operational efficiency.',
      image: 'https://readdy.ai/api/search-image?query=Travel%20and%20tour%20team%20planning&width=300&height=400&orientation=portrait',
      expertise: ['Tour Planning', 'Customer Service', 'Vendor Management', 'Marketing', 'Event Coordination'],
      social: {}
    },
    {
      name: 'Logistic Department',
      role: 'Department',
      bio: 'Ensuring fast, reliable, and cost-effective delivery solutions for a seamless customer experience.',
      image: 'https://readdy.ai/api/search-image?query=Logistics%20team%20managing%20shipments&width=300&height=400&orientation=portrait',
      expertise: ['Supply Chain Management', 'Last-Mile Delivery', 'Warehouse Management', 'Shipping Negotiation', 'Reverse Logistics', 'Real-Time Tracking'],
      social: {}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{dept.name}</h3>
                  <p className="text-yellow-400 font-medium text-sm mb-1">{dept.role}</p>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{dept.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium text-sm mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* No social icons for departments */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
