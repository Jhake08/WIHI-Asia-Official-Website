
'use client';

import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does it take to set up my store?',
      answer: 'Store setup typically takes 1-2 weeks depending on the platform and complexity. We provide a detailed timeline during our initial consultation and keep you updated throughout the process.'
    },
    {
      question: 'What platforms do you specialize in?',
      answer: 'We specialize in Facebook Commerce, TikTok Shop, Shopee, and Lazada. Our team has deep expertise in each platform\'s unique features and best practices for maximizing sales.'
    },
    {
      question: 'Do you provide ongoing support after setup?',
      answer: 'Yes! We offer comprehensive ongoing support including performance monitoring, optimization, customer service, and strategic consultations. Our support packages are tailored to your specific needs.'
    },
    {
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing including monthly retainers, project-based fees, and performance-based models. Pricing depends on the scope of services, platforms involved, and your business size.'
    },
    {
      question: 'Can you help with multiple platforms simultaneously?',
      answer: 'Absolutely! We excel at managing multi-platform strategies that ensure consistent branding and messaging across Facebook, TikTok, Shopee, and Lazada while optimizing each platform\'s unique features.'
    },
    {
      question: 'Do you work with businesses outside the US?',
      answer: 'Yes, we serve clients globally. Our team has experience with international markets, cross-border commerce, and platform-specific requirements in different regions.'
    },
    {
      question: 'What kind of results can I expect?',
      answer: 'While results vary by business and market conditions, our clients typically see 200-500% increases in online revenue within 3-6 months. We provide detailed performance reports and ROI tracking.'
    },
    {
      question: 'Do you provide training for my team?',
      answer: 'Yes, we offer comprehensive training programs for your internal team, covering platform management, best practices, and ongoing optimization strategies to ensure long-term success.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>
          <p className="text-gray-300">
            Get answers to common questions about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <i className={`ri-${activeIndex === index ? 'subtract' : 'add'}-line text-yellow-400 text-xl transition-transform duration-300`}></i>
                </div>
              </button>
              
              {activeIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="p-8 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-sm border border-yellow-500/30 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our team is here to help with personalized answers.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
