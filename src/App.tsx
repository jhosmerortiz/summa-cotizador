import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { AboutSection } from '@/sections/AboutSection';
import { AttributesSection } from '@/sections/AttributesSection';
import { ContactSection } from '@/sections/contact/ContactSection';
import { HeroSection } from '@/sections/hero/HeroSection';
import { SolutionsSection } from '@/sections/SolutionsSection';
import { StatementSection } from '@/sections/StatementSection';

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <AttributesSection />
        <StatementSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
