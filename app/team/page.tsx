
import TeamHero from './TeamHero';
import TeamGrid from './TeamGrid';
import DepartmentsSection from './DepartmentsSection';
import CultureSection from './CultureSection';
import JoinTeamCTA from './JoinTeamCTA';

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <TeamHero />
      <TeamGrid />
      <DepartmentsSection />
      <CultureSection />
      <JoinTeamCTA />
    </main>
  );
}
