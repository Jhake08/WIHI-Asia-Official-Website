
import AboutHero from './AboutHero';
import CompanyStory from './CompanyStory';
import ValuesSection from './ValuesSection';
import StatsSection from './StatsSection';
import TeamPreview from './TeamPreview';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <AboutHero />
      <CompanyStory />
      <ValuesSection />
      <StatsSection />
      <TeamPreview />
    </main>
  );
}
