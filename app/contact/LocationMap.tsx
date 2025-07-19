
'use client';

export default function LocationMap() {
  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-green-400">Locations</span>
          </h2>
          <p className="text-gray-300">
            Visit us at our offices or connect with us remotely from anywhere in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="p-6 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">San Francisco Headquarters</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-map-pin-line text-green-400"></i>
                  </div>
                  <span>123 Innovation Drive, San Francisco, CA 94107</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-phone-line text-green-400"></i>
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-time-line text-green-400"></i>
                  </div>
                  <span>Mon-Fri: 9AM-6PM PST</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">New York Office</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-map-pin-line text-blue-400"></i>
                  </div>
                  <span>456 Business Ave, New York, NY 10001</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-phone-line text-blue-400"></i>
                  </div>
                  <span>+1 (555) 987-6543</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-time-line text-blue-400"></i>
                  </div>
                  <span>Mon-Fri: 9AM-6PM EST</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Remote Support</h3>
              <p className="text-gray-300 mb-3">
                We serve clients globally with our remote-first approach. No matter where you are, we're here to help.
              </p>
              <div className="flex items-center text-gray-300">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-global-line text-purple-400"></i>
                </div>
                <span>Available worldwide via video calls and online collaboration</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.890459906618!2d-122.39176768468105!3d37.79239087975594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807c4e8b6a05%3A0x49e0d7b7c0e5a6f7!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
              className="w-full h-96 lg:h-full rounded-xl border border-gray-700"
              style={{ minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-4 right-4 p-3 bg-black/70 backdrop-blur-sm border border-gray-600 rounded-lg">
              <div className="text-white font-medium text-sm">San Francisco HQ</div>
              <div className="text-gray-300 text-xs">Main Office Location</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="p-8 bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-sm border border-green-500/30 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Schedule a Visit</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Want to meet in person? Schedule a visit to our offices or arrange a virtual tour of our facilities.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Schedule Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
