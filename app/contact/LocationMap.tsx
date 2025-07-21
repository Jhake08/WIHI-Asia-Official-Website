
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
              <h3 className="text-xl font-bold text-white mb-4">Rodriguez Rizal Headquarters</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-map-pin-line text-green-400"></i>
                  </div>
                  <span>#99 MH Del Pilar Street, Brgy Balite,, Rodriguez, Philippines</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-phone-line text-green-400"></i>
                  </div>
                  <span>+63 (0976 055 2152)</span>
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
              <h3 className="text-xl font-bold text-white mb-4">Montalban Rizal</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-map-pin-line text-blue-400"></i>
                  </div>
                  <span>167 J. P. Rizal St, Balite, Rodriguez, 1860 Rizal</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-phone-line text-blue-400"></i>
                  </div>
                  <span>+63 (0976 055 2152)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-time-line text-blue-400"></i>
                  </div>
                  <span>Mon-Fri: 9AM-5PM EST</span>
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
              src="https://www.google.com/maps/place/Rc+Fitness+Gym/@14.7354738,121.1465851,17z/data=!4m6!3m5!1s0x3397bb3f5ab62f81:0xd645201a52037757!8m2!3d14.7354686!4d121.1474434!16s%2Fg%2F11ggjd6qlh?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
              className="w-full h-96 lg:h-full rounded-xl border border-gray-700"
              style={{ minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-4 right-4 p-3 bg-black/70 backdrop-blur-sm border border-gray-600 rounded-lg">
              <div className="text-white font-medium text-sm">Rodriguez Rizal HQ</div>
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
