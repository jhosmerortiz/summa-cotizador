import { BRAND, LOGOS, type LogoTone, type LogoVariant } from '@/config/brand';

interface LogoProps {
  variant?: LogoVariant;
  /** "color" para fondos claros, "negativo" para fondos oscuros (Manual §02, §06). */
  tone?: LogoTone;
  /** Ancho en px. Para logotipos completos respeta el mínimo digital de 120 px (Manual §05). */
  width: number;
  className?: string;
  /** Carga diferida. Desactivada por defecto: los logotipos son livianos y deben verse siempre. */
  lazy?: boolean;
}

/**
 * Renderiza una versión oficial del logotipo sin alterarla:
 * sin sombras, rotaciones, deformaciones ni cambios de color (Manual §06).
 */
export function Logo({ variant = 'horizontal', tone = 'color', width, className = '', lazy = false }: LogoProps) {
  const logo = LOGOS[variant];

  return (
    <img
      src={logo[tone]}
      alt={BRAND.signature}
      width={width}
      height={Math.round(width / logo.ratio)}
      loading={lazy ? 'lazy' : 'eager'}
      decoding="async"
      className={`block h-auto select-none ${className}`}
      style={{ width }}
      draggable={false}
    />
  );
}
