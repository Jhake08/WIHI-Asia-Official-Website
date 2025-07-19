
import ServicesHero from './ServicesHero';
import PlatformServices from './PlatformServices';
import ProcessSection from './ProcessSection';
import PricingSection from './PricingSection';
import TestimonialsSection from './TestimonialsSection';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <ServicesHero />
      <PlatformServices />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
    </main>
  );
}
