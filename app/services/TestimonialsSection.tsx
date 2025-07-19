
'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Fashion Forward Co.',
      role: 'CEO',
      content: 'Their TikTok Shop strategy increased our monthly revenue by 400%. The team\'s expertise in social commerce is unmatched.',
      rating: 5,
      platform: 'TikTok'
    },
    {
      name: 'Michael Chen',
      company: 'Tech Gadgets Plus',
      role: 'Marketing Director',
      content: 'From zero to $100k monthly on Shopee in just 6 months. Their data-driven approach delivers real results.',
      rating: 5,
      platform: 'Shopee'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Home Essentials',
      role: 'Founder',
      content: 'Facebook Commerce was a game-changer for us. Professional setup and ongoing optimization that actually works.',
      rating: 5,
      platform: 'Facebook'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client <span className="text-green-400">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real businesses who trusted us with their ecommerce growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-green-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-4 h-4 flex items-center justify-center mr-1">
                    <i className="ri-star-fill text-yellow-400 text-sm"></i>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
                <div className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-xs">
                  {testimonial.platform}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
