import { Logo } from '@/components/brand/Logo';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTACT, SECTION_IDS } from '@/content/site';
import { ContactChannels } from '@/components/contact/ContactChannels';
import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
    <Section id={SECTION_IDS.contact} tone="light">
      <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.05fr]">
        <Reveal className="flex flex-col gap-8">
          <SectionHeader align="left" eyebrow={CONTACT.eyebrow} title={CONTACT.title} description={CONTACT.description} />
          <ContactChannels />
          <Logo variant="horizontal" tone="color" width={170} className="mt-2 hidden lg:block" />
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-line bg-white p-6 shadow-2xl shadow-brand-navy/10 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
