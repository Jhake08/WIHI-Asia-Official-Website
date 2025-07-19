'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-pacifico">logo</h3>
            <p className="text-gray-400 mb-4">
              Leading ecommerce solutions across Facebook, TikTok, Shopee, and Lazada platforms.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-sm"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-sm"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-sm"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-sm"></i>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">Facebook Marketing</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">TikTok Commerce</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">Shopee Management</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">Lazada Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors cursor-pointer">Our Team</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors cursor-pointer">Careers</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors cursor-pointer">Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-mail-line text-xs"></i>
                </div>
                hello@company.com
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-phone-line text-xs"></i>
                </div>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-map-pin-line text-xs"></i>
                </div>
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}