import { Logo } from '@/components/brand/Logo';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ABOUT, SECTION_IDS } from '@/content/site';

export function AboutSection() {
  return (
    <Section id={SECTION_IDS.about} tone="light">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <Reveal className="flex flex-col gap-8">
          <SectionHeader align="left" eyebrow={ABOUT.eyebrow} title={ABOUT.title} description={ABOUT.description} />

          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-muted">{ABOUT.personalityLabel}</span>
            <ul className="flex flex-wrap gap-2.5">
              {ABOUT.personality.map((trait) => (
                <li
                  key={trait}
                  className="rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-2 text-sm font-semibold text-brand-blue"
                >
                  {trait}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative grid place-items-center rounded-[2rem] border border-line bg-surface px-8 py-14 sm:py-16">
            <span
              aria-hidden="true"
              className="absolute inset-x-10 top-0 h-1 rounded-b-full bg-gradient-to-r from-brand-blue to-brand-teal"
            />
            <Logo variant="vertical" tone="color" width={260} className="max-w-full" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
