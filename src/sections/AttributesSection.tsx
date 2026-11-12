import { BrandBands } from '@/components/brand/BrandBands';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ATTRIBUTES, SECTION_IDS } from '@/content/site';

export function AttributesSection() {
  return (
    <Section
      id={SECTION_IDS.attributes}
      tone="dark"
      background={<BrandBands className="absolute -bottom-40 -left-56 w-[640px] opacity-25" />}
    >
      <Reveal>
        <SectionHeader onDark eyebrow={ATTRIBUTES.eyebrow} title={ATTRIBUTES.title} />
      </Reveal>

      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ATTRIBUTES.items.map(({ title, description, icon: Icon }, index) => (
          <Reveal as="li" key={title} delay={index * 100} className="h-full">
            <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-brand-teal/60 hover:bg-white/[0.07]">
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-teal text-brand-navy transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-6" strokeWidth={2} />
                </span>
                <span className="text-sm font-semibold tabular-nums text-white/35">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
