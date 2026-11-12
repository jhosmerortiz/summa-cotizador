import { ArrowRight } from 'lucide-react';
import { BrandBands } from '@/components/brand/BrandBands';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { HERO } from '@/content/site';
import { QuoteMockup } from './QuoteMockup';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-brand-navy pb-24 pt-32 text-white sm:pb-32 sm:pt-40"
    >
      {/* Fondo: luz de marca + retícula sutil + bandas diagonales */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_70%_at_80%_40%,rgb(5_73_154/0.9),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]"
      />
      <BrandBands className="absolute -right-40 top-10 -z-10 w-[720px] opacity-40 lg:-right-20" />

      <Container className="grid items-center gap-16 lg:grid-cols-[1.25fr_1fr]">
        <Reveal className="flex flex-col items-start gap-7">
          <Eyebrow onDark>{HERO.eyebrow}</Eyebrow>

          <h1 className="text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            <span className="block font-bold">{HERO.title}</span>
            <span className="block font-semibold text-brand-teal">{HERO.highlight}</span>
          </h1>

          <p className="max-w-xl text-base font-light leading-relaxed text-white/80 sm:text-lg">{HERO.description}</p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href={HERO.primaryCta.href} icon={<ArrowRight className="size-4" />}>
              {HERO.primaryCta.label}
            </Button>
            <Button href={HERO.secondaryCta.href} variant="outline-light">
              {HERO.secondaryCta.label}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <QuoteMockup />
        </Reveal>
      </Container>
    </section>
  );
}
