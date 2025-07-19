
'use client';

export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        '1 Platform Management',
        'Basic Store Setup',
        'Monthly Performance Reports',
        'Email Support',
        'Up to 100 Products'
      ],
      popular: false,
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '2 Platform Management',
        'Advanced Store Optimization',
        'Bi-weekly Strategy Calls',
        'Priority Support',
        'Up to 500 Products',
        'Custom Analytics Dashboard'
      ],
      popular: true,
      color: 'from-blue-600 to-purple-600'
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'Complete solution for large businesses',
      features: [
        'All Platform Management',
        'Full-Service Management',
        'Weekly Strategy Sessions',
        'Dedicated Account Manager',
        'Unlimited Products',
        'Advanced Analytics & Insights',
        'Custom Integrations'
      ],
      popular: false,
      color: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-blue-400">Plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-black/30 backdrop-blur-sm border ${
                plan.popular ? 'border-blue-500/50' : 'border-gray-700'
              } rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer ${
                plan.popular ? 'ring-2 ring-blue-500/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-4 h-4 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-green-400 text-sm"></i>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 ${
                plan.popular
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'border-2 border-gray-600 text-gray-300 hover:border-gray-500'
              } font-semibold rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
