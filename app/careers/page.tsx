
import CareersHero from './CareersHero';
import OpenPositions from './OpenPositions';
import BenefitsSection from './BenefitsSection';
import ApplicationProcess from './ApplicationProcess';
import LifeAtCompany from './LifeAtCompany';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <CareersHero />
      <OpenPositions />
      <BenefitsSection />
      <ApplicationProcess />
      <LifeAtCompany />
    </main>
  );
}
