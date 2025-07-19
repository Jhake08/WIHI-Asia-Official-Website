
import AboutHero from './AboutHero';
import CompanyStory from './CompanyStory';
import ValuesSection from './ValuesSection';
import StatsSection from './StatsSection';
import TeamPreview from './TeamPreview';
import OurMission from './OurMission';
import CompanyTimeline from './CompanyTimeline';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <AboutHero />
      <OurMission />
      <CompanyTimeline />
      <CompanyStory />
      <ValuesSection />
      <StatsSection />
      <TeamPreview />
    </main>
  );
}
