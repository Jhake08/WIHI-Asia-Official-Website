
'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-mail-line',
      title: 'Email Us',
      primary: 'hello@company.com',
      secondary: 'support@company.com',
      description: 'Get a response within 24 hours'
    },
    {
      icon: 'ri-phone-line',
      title: 'Call Us',
      primary: '+1 (555) 123-4567',
      secondary: '+1 (555) 987-6543',
      description: 'Mon-Fri, 9AM-6PM PST'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Visit Us',
      primary: '123 Innovation Drive',
      secondary: 'San Francisco, CA 94107',
      description: 'Schedule an appointment'
    },
    {
      icon: 'ri-time-line',
      title: 'Business Hours',
      primary: 'Monday - Friday',
      secondary: '9:00 AM - 6:00 PM PST',
      description: '24/7 emergency support available'
    }
  ];

  const socialLinks = [
    { icon: 'ri-linkedin-fill', platform: 'LinkedIn', url: '#' },
    { icon: 'ri-twitter-fill', platform: 'Twitter', url: '#' },
    { icon: 'ri-facebook-fill', platform: 'Facebook', url: '#' },
    { icon: 'ri-instagram-fill', platform: 'Instagram', url: '#' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-300">
            Multiple ways to reach us. Choose what works best for you.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="p-6 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mr-4 flex-shrink-0">
                  <i className={`${method.icon} text-white text-lg`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-blue-400 font-medium mb-1">{method.primary}</p>
                  <p className="text-gray-300 mb-2">{method.secondary}</p>
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <div
                key={index}
                className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <i className={`${social.icon} text-white text-lg`}></i>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/30 rounded-xl text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-4">
            <i className="ri-customer-service-line text-white text-2xl"></i>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Need Immediate Help?</h3>
          <p className="text-gray-300 mb-4">
            Our support team is available 24/7 for urgent matters and existing clients.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
            Emergency Support
          </button>
        </div>
      </div>
    </section>
  );
}
