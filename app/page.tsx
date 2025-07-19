'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20digital%20marketing%20workspace%20with%20multiple%20screens%20showing%20social%20media%20platforms%20Facebook%20TikTok%20Shopee%20Lazada%2C%20professional%20office%20environment%20with%20elegant%20lighting%2C%20minimalist%20black%20and%20gold%20color%20scheme%2C%20high-tech%20atmosphere%20with%20glowing%20screens%20and%20data%20visualization%20charts%2C%20sophisticated%20business%20setting%20with%20clean%20geometric%20patterns%20and%20subtle%20technological%20elements%20in%20the%20background&width=1920&height=1080&seq=hero1&orientation=landscape')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Dominate Every
            <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Platform
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            We transform businesses across Facebook, TikTok, Shopee, and Lazada with cutting-edge ecommerce strategies that deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Start Your Journey
            </Link>
            <Link href="/portfolio" className="border border-gray-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 whitespace-nowrap cursor-pointer">
              View Our Work
            </Link>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 flex items-center justify-center bg-blue-600/20 rounded-full animate-pulse">
          <i className="ri-facebook-fill text-2xl text-blue-400"></i>
        </div>
        <div className="absolute top-40 right-16 w-12 h-12 flex items-center justify-center bg-pink-600/20 rounded-full animate-pulse delay-1000">
          <i className="ri-tiktok-fill text-xl text-pink-400"></i>
        </div>
        <div className="absolute bottom-40 left-20 w-14 h-14 flex items-center justify-center bg-orange-600/20 rounded-full animate-pulse delay-2000">
          <i className="ri-shopping-bag-fill text-xl text-orange-400"></i>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Master Every <span className="text-blue-400">Platform</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Facebook', icon: 'ri-facebook-fill', color: 'from-blue-600 to-blue-400', desc: 'Social Commerce Excellence' },
              { name: 'TikTok', icon: 'ri-tiktok-fill', color: 'from-pink-600 to-pink-400', desc: 'Viral Marketing Mastery' },
              { name: 'Shopee', icon: 'ri-shopping-bag-fill', color: 'from-orange-600 to-orange-400', desc: 'Marketplace Domination' },
              { name: 'Lazada', icon: 'ri-shopping-cart-fill', color: 'from-purple-600 to-purple-400', desc: 'Regional Leadership' }
            ].map((platform) => (
              <div key={platform.name} className="group">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center hover:border-gray-600 transition-all duration-500 hover:scale-105 cursor-pointer">
                  <div className={`w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gradient-to-r ${platform.color} rounded-full`}>
                    <i className={`${platform.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                  <p className="text-gray-400">{platform.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Successful Campaigns' },
              { number: '$50M+', label: 'Revenue Generated' },
              { number: '200+', label: 'Happy Clients' },
              { number: '99%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </h3>
                <p className="text-gray-400 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Our <span className="text-purple-400">Expertise</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Social Media Marketing',
                desc: 'Engaging campaigns that convert followers into customers',
                icon: 'ri-heart-fill',
                image: 'https://readdy.ai/api/search-image?query=Social%20media%20marketing%20dashboard%20with%20engagement%20metrics%20and%20analytics%20charts%2C%20modern%20interface%20design%20with%20vibrant%20colors%20and%20data%20visualization%2C%20professional%20digital%20marketing%20workspace%20with%20multiple%20social%20media%20platform%20icons%2C%20clean%20minimalist%20design%20with%20elegant%20typography%20and%20glowing%20elements&width=400&height=300&seq=service1&orientation=landscape'
              },
              {
                title: 'E-commerce Optimization',
                desc: 'Maximize sales with data-driven marketplace strategies',
                icon: 'ri-line-chart-fill',
                image: 'https://readdy.ai/api/search-image?query=E-commerce%20optimization%20dashboard%20showing%20sales%20charts%20revenue%20graphs%20and%20conversion%20metrics%2C%20professional%20analytics%20interface%20with%20modern%20design%20elements%2C%20clean%20white%20background%20with%20colorful%20data%20visualization%20charts%20and%20shopping%20icons%2C%20minimalist%20business%20dashboard%20design&width=400&height=300&seq=service2&orientation=landscape'
              },
              {
                title: 'Content Creation',
                desc: 'Viral content that drives engagement and sales',
                icon: 'ri-video-fill',
                image: 'https://readdy.ai/api/search-image?query=Creative%20content%20production%20studio%20with%20professional%20lighting%20and%20camera%20equipment%2C%20modern%20video%20creation%20workspace%20with%20editing%20monitors%20and%20creative%20tools%2C%20clean%20minimalist%20studio%20setup%20with%20elegant%20lighting%20and%20professional%20video%20production%20equipment&width=400&height=300&seq=service3&orientation=landscape'
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-500 hover:scale-105 cursor-pointer">
                  <div className="h-48 bg-cover bg-center relative overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full">
                      <i className={`${service.icon} text-xl text-white`}></i>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-blue-400">Scale</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of successful brands that trust us to amplify their presence across all major platforms.
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}