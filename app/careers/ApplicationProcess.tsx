
'use client';

export default function ApplicationProcess() {
  const steps = [
    {
      number: '01',
      title: 'Application Review',
      description: 'Our team carefully reviews your application and portfolio to assess fit for the role.',
      duration: '2-3 days',
      icon: 'ri-file-text-line'
    },
    {
      number: '02',
      title: 'Initial Screening',
      description: 'Brief phone or video call to discuss your background and interest in the position.',
      duration: '30 minutes',
      icon: 'ri-phone-line'
    },
    {
      number: '03',
      title: 'Technical Assessment',
      description: 'Role-specific evaluation to demonstrate your skills and problem-solving abilities.',
      duration: '1-2 hours',
      icon: 'ri-code-line'
    },
    {
      number: '04',
      title: 'Team Interview',
      description: 'Meet with team members and hiring manager to discuss collaboration and culture fit.',
      duration: '45-60 minutes',
      icon: 'ri-group-line'
    },
    {
      number: '05',
      title: 'Final Decision',
      description: 'We make our decision and extend an offer to successful candidates.',
      duration: '1-2 days',
      icon: 'ri-check-line'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Application <span className="text-purple-400">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our streamlined hiring process is designed to be transparent and efficient while ensuring the best fit for both you and our team.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative z-10 w-20 h-20 flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-6 hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <i className={`${step.icon} text-white text-2xl`}></i>
                  </div>
                  <div className="text-4xl font-bold text-purple-400/30 mb-2">{step.number}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{step.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-gray-800 rounded-full text-gray-400 text-xs">
                    <div className="w-3 h-3 flex items-center justify-center mr-2">
                      <i className="ri-time-line text-xs"></i>
                    </div>
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="p-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Questions About the Process?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're here to help! Reach out to our HR team if you have any questions about the application process or specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
                Contact HR Team
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 whitespace-nowrap cursor-pointer">
                View FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
