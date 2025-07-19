
'use client';

export default function BenefitsSection() {
  const benefits = [
    {
      category: 'Health & Wellness',
      icon: 'ri-heart-pulse-line',
      color: 'from-red-600 to-pink-600',
      items: [
        'Comprehensive health, dental, and vision insurance',
        'Mental health support and counseling services',
        'Fitness membership reimbursement',
        'Wellness stipend for health-related expenses'
      ]
    },
    {
      category: 'Work-Life Balance',
      icon: 'ri-scales-line',
      color: 'from-blue-600 to-cyan-600',
      items: [
        'Flexible working hours and remote work options',
        'Unlimited PTO policy',
        'Sabbatical opportunities after 3 years',
        'Family leave and support programs'
      ]
    },
    {
      category: 'Financial Benefits',
      icon: 'ri-money-dollar-circle-line',
      color: 'from-green-600 to-teal-600',
      items: [
        'Competitive salary with performance bonuses',
        'Equity participation in company growth',
        '401(k) with company matching',
        'Financial planning and investment assistance'
      ]
    },
    {
      category: 'Professional Growth',
      icon: 'ri-graduation-cap-line',
      color: 'from-purple-600 to-indigo-600',
      items: [
        'Annual learning and development budget',
        'Conference attendance and training programs',
        'Mentorship and career advancement opportunities',
        'Internal mobility and cross-team collaboration'
      ]
    },
    {
      category: 'Equipment & Office',
      icon: 'ri-computer-line',
      color: 'from-orange-600 to-red-600',
      items: [
        'Top-tier laptop and equipment provision',
        'Home office setup stipend',
        'Co-working space membership',
        'Latest software tools and subscriptions'
      ]
    },
    {
      category: 'Company Culture',
      icon: 'ri-team-line',
      color: 'from-yellow-600 to-orange-600',
      items: [
        'Regular team building events and retreats',
        'Diversity and inclusion initiatives',
        'Employee resource groups and communities',
        'Recognition and rewards programs'
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive <span className="text-blue-400">Benefits</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We believe in taking care of our team members with benefits that support your health, growth, and overall well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${benefit.color} rounded-full mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${benefit.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white">{benefit.category}</h3>
              </div>
              
              <ul className="space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-gray-300 text-sm">
                    <div className="w-4 h-4 flex items-center justify-center mr-3 mt-0.5">
                      <i className="ri-check-line text-green-400 text-xs"></i>
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
