'use client';

import { useState } from 'react';
import PlanApplicationModal from './PlanApplicationModal';

export default function PricingSection() {
  const plans = [
    {
      name: 'Facebook',
      price: '',
      period: '',
      description: (
        <>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
            <li>Comprehensive Facebook Shop setup</li>
            <li>Instagram Shopping integration</li>
            <li>Ads management</li>
            <li>Performance analytics</li>
          </ul>
        </>
      ),
      features: [],
      popular: false,
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'TikTok',
      price: '',
      period: '',
      description: (
        <>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
            <li>TikTok Shop creation</li>
            <li>Live shopping events</li>
            <li>Influencer partnerships</li>
            <li>Optimized ad campaigns</li>
          </ul>
        </>
      ),
      features: [],
      popular: true,
      color: 'from-pink-600 to-purple-800'
    },
    {
      name: 'Lazada',
      price: '',
      period: '',
      description: (
        <>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
            <li>Lazada store optimization</li>
            <li>Product photography</li>
            <li>Sponsored solutions</li>
            <li>Cross-border trade support</li>
            <li>Logistics</li>
          </ul>
        </>
      ),
      features: [],
      popular: false,
      color: 'from-blue-600 to-purple-800'
    },
    {
      name: 'Shopee',
      price: '',
      period: '',
      description: (
        <>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
            <li>Shopee store setup</li>
            <li>Product listing optimization</li>
            <li>Ad campaign management</li>
            <li>Inventory management</li>
            <li>Customer service</li>
          </ul>
        </>
      ),
      features: [],
      popular: false,
      color: 'from-orange-600 to-red-800'
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const openModal = (platformName: string) => {
    setSelectedPlatform(platformName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPlatform(null);
    setIsModalOpen(false);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-blue-400">Platform</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized platform options designed to scale with your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-black/30 backdrop-blur-sm border ${
                plan.popular ? 'border-blue-500/50' : 'border-gray-700'
              } rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer ${
                plan.popular ? 'ring-2 ring-blue-500/20' : ''
              }`}
              onClick={() => openModal(plan.name)}
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
                <div className="text-gray-300 text-sm mb-6">{plan.description}</div>
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

              <button
                onClick={() => openModal(plan.name)}
                className={`w-full py-4 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'border-2 border-gray-600 text-gray-300 hover:border-gray-500'
                } font-semibold rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      <PlanApplicationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedPlatform={selectedPlatform}
      />
    </section>
  );
}
