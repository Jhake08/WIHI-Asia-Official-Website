
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Start Your <span className="text-cyan-400">Project</span>
          </h2>
          <p className="text-gray-300">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-medium mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors text-sm"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors text-sm"
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-medium mb-2">Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors text-sm"
                placeholder="Your company"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors text-sm"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-medium mb-2">Service Interested In</label>
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors text-sm pr-8 appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value="facebook">Facebook Commerce</option>
                  <option value="tiktok">TikTok Shop</option>
                  <option value="shopee">Shopee Management</option>
                  <option value="lazada">Lazada Solutions</option>
                  <option value="multiple">Multiple Platforms</option>
                  <option value="consulting">Consulting Only</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center pointer-events-none">
                  <i className="ri-arrow-down-s-line text-gray-400"></i>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Budget Range</label>
              <div className="relative">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors text-sm pr-8 appearance-none"
                >
                  <option value="">Select budget range</option>
                  <option value="under-₱1k">Under ₱1,000/month</option>
                  <option value="1k-5k"> ₱1,000 - ₱5,000/month</option>
                  <option value="5k-10k" ₱5,000 - ₱10,000/month</option>
                  <option value="10k-plus">₱10,000+/month</option>
                  <option value="project">One-time project</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center pointer-events-none">
                  <i className="ri-arrow-down-s-line text-gray-400"></i>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Project Details *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={500}
              rows={5}
              className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors text-sm resize-vertical"
              placeholder="Tell us about your project, goals, and current challenges..."
            />
            <div className="text-right text-gray-400 text-xs mt-1">
              {formData.message.length}/500 characters
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-600/20 border border-green-500/30 rounded-lg text-green-300 text-center">
              <div className="w-6 h-6 flex items-center justify-center mx-auto mb-2">
                <i className="ri-check-line text-lg"></i>
              </div>
              Thank you! We'll get back to you within 24 hours.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || formData.message.length > 500}
            className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap cursor-pointer"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-loader-4-line animate-spin"></i>
                </div>
                Sending Message...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
