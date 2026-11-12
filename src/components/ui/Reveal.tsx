import type { CSSProperties, ReactNode, Ref } from 'react';
import { useInView } from '@/hooks/useInView';

interface RevealProps {
  children: ReactNode;
  /** Retraso en ms para escalonar elementos de una lista. */
  delay?: number;
  className?: string;
  /** Etiqueta HTML a renderizar (p. ej. "li" dentro de listas). */
  as?: 'div' | 'li';
}

/** Aparición suave al entrar en pantalla. Respeta prefers-reduced-motion (global.css). */
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref as Ref<HTMLDivElement & HTMLLIElement>}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
