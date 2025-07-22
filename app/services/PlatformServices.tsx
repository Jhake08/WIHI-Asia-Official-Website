'use client';

export default function PlatformServices() {
  const platforms = [
    {
      name: 'Facebook Commerce',
      icon: 'ri-facebook-fill',
      color: 'from-blue-600 to-blue-800',
      borderColor: 'border-blue-500/30',
      services: [
        'Facebook Shop Setup & Optimization',
        'Instagram Shopping Integration',
        'Facebook Ads Management',
        'Messenger Commerce Bots',
        'Catalog Management',
        'Performance Analytics'
      ],
      image: 'https://readdy.ai/api/search-image?query=Facebook%20business%20interface%20showing%20ecommerce%20store%20setup%20with%20product%20catalogs%20and%20shopping%20features%2C%20modern%20social%20media%20commerce%20dashboard%20with%20blue%20theme%2C%20professional%20digital%20marketing%20environment%20displaying%20Facebook%20ads%20manager%20and%20shop%20integration%20tools&width=400&height=300&seq=facebook-service&orientation=landscape'
    },
    {
      name: 'TikTok Shop',
      icon: 'ri-tiktok-fill',
      color: 'from-pink-600 to-purple-800',
      borderColor: 'border-pink-500/30',
      services: [
        'TikTok Shop Store Creation',
        'Live Shopping Events',
        'Influencer Partnership Management',
        'TikTok Ads Optimization',
        'Content Strategy Development',
        'Sales Funnel Creation'
      ],
      image: 'https://readdy.ai/api/search-image?query=TikTok%20commerce%20interface%20showing%20shop%20setup%20and%20live%20streaming%20features%2C%20vibrant%20social%20media%20platform%20with%20pink%20and%20purple%20elements%2C%20modern%20mobile-first%20ecommerce%20environment%20displaying%20TikTok%20business%20tools%20and%20creator%20economy%20features&width=400&height=300&seq=tiktok-service&orientation=landscape'
    },
    {
      name: 'Shopee Management',
      icon: 'ri-store-fill',
      color: 'from-orange-600 to-red-800',
      borderColor: 'border-orange-500/30',
      services: [
        'Store Setup & Branding',
        'Product Listing Optimization',
        'Shopee Ads Campaign Management',
        'Inventory Management',
        'Customer Service Excellence',
        'Sales Performance Tracking'
      ],
      image: 'https://readdy.ai/api/search-image?query=Shopee%20marketplace%20interface%20showing%20seller%20dashboard%20with%20product%20listings%20and%20sales%20analytics%2C%20orange-themed%20ecommerce%20platform%20displaying%20store%20management%20tools%2C%20Southeast%20Asian%20marketplace%20with%20professional%20business%20environment&width=400&height=300&seq=shopee-service&orientation=landscape'
    },
    {
      name: 'Lazada Solutions',
      icon: 'ri-shopping-bag-fill',
      color: 'from-blue-600 to-purple-800',
      borderColor: 'border-blue-500/30',
      services: [
        'Lazada Store Optimization',
        'Product Photography Services',
        'Sponsored Solutions Management',
        'Cross-border Trade Support',
        'Logistics Optimization',
        'Market Intelligence Reports'
      ],
      image: 'https://readdy.ai/api/search-image?query=Lazada%20marketplace%20seller%20center%20interface%20showing%20comprehensive%20ecommerce%20tools%2C%20blue%20and%20purple%20themed%20online%20shopping%20platform%2C%20professional%20Southeast%20Asian%20marketplace%20dashboard%20with%20analytics%20and%20inventory%20management%20features&width=400&height=300&seq=lazada-service&orientation=landscape'
    },
    {
      name: 'Travel Agency',
      icon: 'ri-plane-fill',
      color: 'from-cyan-600 to-blue-800',
      borderColor: 'border-cyan-500/30',
      services: [
        'Custom Travel Packages',
        'Flight & Hotel Booking',
        'Tour Planning & Itinerary',
        'Travel Insurance Assistance',
        '24/7 Customer Support',
        'Exclusive Deals & Discounts'
      ],
      image: 'https://readdy.ai/api/search-image?query=Travel%20agency%20office%20with%20maps%20and%20laptops%20showing%20booking%20systems%20and%20travel%20packages&width=400&height=300&seq=travel-agency&orientation=landscape'
    },
    {
      name: 'Salon Spa',
      icon: 'ri-spa-fill',
      color: 'from-pink-600 to-purple-800',
      borderColor: 'border-pink-500/30',
      services: [
        'Spa & Wellness Packages',
        'Appointment Scheduling',
        'Beauty & Hair Services',
        'Customer Loyalty Programs',
        'Product Sales & Promotions',
        'Professional Staff Training'
      ],
      image: 'https://readdy.ai/api/search-image?query=Salon%20spa%20interior%20with%20massage%20beds%20and%20beauty%20products%20displayed%20in%20a%20modern%20setting&width=400&height=300&seq=salon-spa&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Platform <span className="text-blue-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized services for each major ecommerce platform, tailored to maximize your success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`group p-8 bg-black/30 backdrop-blur-sm border ${platform.borderColor} rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer`}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${platform.color} rounded-full group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${platform.icon} text-white text-2xl`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{platform.name}</h3>
                  <img
                    src={platform.image}
                    alt={`${platform.name} services`}
                    className="w-full h-32 object-cover rounded-lg mb-4 object-top"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {platform.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="w-4 h-4 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-green-400 text-sm"></i>
                    </div>
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
