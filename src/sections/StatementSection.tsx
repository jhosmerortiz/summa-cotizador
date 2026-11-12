import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { STATEMENT } from '@/content/site';

export function StatementSection() {
  return (
    <Section
      tone="dark"
      background={
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgb(12_182_174/0.2),transparent_65%),linear-gradient(135deg,var(--color-brand-navy),var(--color-brand-blue))]"
        />
      }
    >
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <blockquote className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          “{STATEMENT.quote}”
        </blockquote>
        <p className="max-w-xl text-base font-medium leading-relaxed text-white/80 sm:text-lg">
          {STATEMENT.description}
        </p>
      </Reveal>
    </Section>
  );
}
