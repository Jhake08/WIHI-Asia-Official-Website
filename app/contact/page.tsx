
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import LocationMap from './LocationMap';
import FAQ from './FAQ';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <LocationMap />
      <FAQ />
    </main>
  );
}
