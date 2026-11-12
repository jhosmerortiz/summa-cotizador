interface BrandBandsProps {
  className?: string;
}

/**
 * Elemento gráfico de apoyo: bandas diagonales con la inclinación y los colores
 * del isotipo. Es decoración de fondo, no una reinterpretación del logotipo.
 */
export function BrandBands({ className = '' }: BrandBandsProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      fill="none"
      className={`pointer-events-none ${className}`}
    >
      <g transform="rotate(-34 300 300)">
        <rect x="40" y="250" width="620" height="110" rx="55" className="fill-brand-blue" opacity="0.55" />
        <rect x="160" y="120" width="380" height="80" rx="40" className="fill-brand-teal" opacity="0.45" />
        <rect x="-40" y="410" width="380" height="80" rx="40" className="fill-brand-teal" opacity="0.3" />
      </g>
    </svg>
  );
}
