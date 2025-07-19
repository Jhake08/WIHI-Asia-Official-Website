'use client';

export default function CompanyTimeline() {
  return (
    <section id="company-timeline" className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Company <span className="text-purple-400">Timeline</span>
        </h2>
        <ul className="text-gray-300 max-w-3xl mx-auto leading-relaxed list-disc list-inside space-y-2">
          <li><strong>2020:</strong> Founded with a vision to revolutionize ecommerce.</li>
          <li><strong>2021:</strong> Expanded services to multiple platforms including Facebook and TikTok.</li>
          <li><strong>2022:</strong> Achieved 500+ active stores and $50M+ revenue generated.</li>
          <li><strong>2023:</strong> Launched new data-driven marketing strategies and technology solutions.</li>
        </ul>
      </div>
    </section>
  );
}
