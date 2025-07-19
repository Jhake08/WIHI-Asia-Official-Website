
import PortfolioHero from './PortfolioHero';
import ProjectsGrid from './ProjectsGrid';
import ResultsSection from './ResultsSection';
import CaseStudies from './CaseStudies';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <PortfolioHero />
      <ProjectsGrid />
      <ResultsSection />
      <CaseStudies />
    </main>
  );
}
