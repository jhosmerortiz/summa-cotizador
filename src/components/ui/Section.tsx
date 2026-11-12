import type { ReactNode } from 'react';
import { Container } from './Container';

export type SectionTone = 'light' | 'surface' | 'dark' | 'accent';

const TONE_CLASSES: Record<SectionTone, string> = {
  light: 'bg-white text-ink',
  surface: 'bg-surface text-ink',
  dark: 'bg-brand-navy text-white',
  /** Turquesa con texto azul oscuro: combinación de alto contraste. */
  accent: 'bg-brand-teal text-brand-navy',
};

interface SectionProps {
  id?: string;
  tone?: SectionTone;
  children: ReactNode;
  className?: string;
  /** Capa decorativa absoluta detrás del contenido. */
  background?: ReactNode;
}

export function Section({ id, tone = 'light', children, className = '', background }: SectionProps) {
  return (
    <section id={id} className={`relative overflow-hidden py-20 sm:py-28 ${TONE_CLASSES[tone]} ${className}`}>
      {background}
      <Container className="relative">{children}</Container>
    </section>
  );
}
