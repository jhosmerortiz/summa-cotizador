import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SECTION_IDS, SOLUTIONS } from '@/content/site';

const ACCENTS = ['from-brand-blue to-brand-blue/70', 'from-brand-teal to-brand-teal/70'] as const;

export function SolutionsSection() {
  return (
    <Section id={SECTION_IDS.solutions} tone="surface">
      <Reveal>
        <SectionHeader eyebrow={SOLUTIONS.eyebrow} title={SOLUTIONS.title} description={SOLUTIONS.description} />
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
        {SOLUTIONS.items.map(({ title, description, icon: Icon }, index) => (
          <Reveal key={title} delay={index * 120}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-navy/10 sm:p-10">
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${ACCENTS[index % ACCENTS.length]}`}
              />
              <span
                className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white ${
                  ACCENTS[index % ACCENTS.length]
                }`}
              >
                <Icon className="size-7" strokeWidth={1.75} />
              </span>
              <h3 className="mt-7 text-xl font-bold text-brand-navy sm:text-2xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
