import type { ReactNode } from 'react';
import { Eyebrow } from './Eyebrow';

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  onDark?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  onDark = false,
  className = '',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start';

  return (
    <header className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <h2
        className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          onDark ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed sm:text-lg ${onDark ? 'text-white/75' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </header>
  );
}
