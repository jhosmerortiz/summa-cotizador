import type { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  onDark?: boolean;
}

export function Eyebrow({ children, onDark = false }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
        onDark ? 'text-brand-teal' : 'text-brand-blue'
      }`}
    >
      <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-brand-teal" />
      {children}
    </span>
  );
}
