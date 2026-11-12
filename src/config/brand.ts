/**
 * Identidad de marca SUMMA — fuente: "MANUAL DE MARCA/MANUAL DE MARCA SUMMA.pdf".
 * Los archivos maestros están en "LOGO E ICONOS/"; aquí se referencian las
 * versiones optimizadas para web que viven en src/assets/brand/.
 *
 * Se importan (en lugar de usar rutas de texto) para que Vite les agregue un
 * hash al nombre —el navegador siempre descarga la versión vigente— y para que
 * el build falle si algún archivo falta o cambia de nombre.
 * Los favicons van en public/brand/ porque index.html necesita rutas fijas.
 */
import iconoApp from '@/assets/brand/icono-app.png';
import isotipo from '@/assets/brand/isotipo.png';
import logoHorizontalNegativo from '@/assets/brand/logo-horizontal-negativo.png';
import logoHorizontal from '@/assets/brand/logo-horizontal.png';
import logoVerticalNegativo from '@/assets/brand/logo-vertical-negativo.png';
import logoVertical from '@/assets/brand/logo-vertical.png';

export const BRAND = {
  name: 'SUMMA',
  company: 'Vertex',
  /** Razón comercial usada en el aviso de derechos. */
  companyLegalName: 'Vertex Developers',
  companyUrl: 'https://www.vertexdev.tech/',
  signature: 'SUMMA by Vertex',
  tagline: 'Impulsa tus ventas con cotizaciones ágiles',
} as const;

/** §03 Paleta cromática (también definida como tokens en styles/global.css). */
export const BRAND_COLORS = {
  blue: '#05499a',
  teal: '#0cb6ae',
  navy: '#012554',
  white: '#ffffff',
} as const;

/** §02 Versiones oficiales. "color" sobre fondos claros, "negativo" sobre fondos oscuros. */
export const LOGOS = {
  horizontal: {
    color: logoHorizontal,
    negativo: logoHorizontalNegativo,
    ratio: 1200 / 390,
  },
  vertical: {
    color: logoVertical,
    negativo: logoVerticalNegativo,
    ratio: 1,
  },
  isotipo: {
    color: isotipo,
    negativo: isotipo,
    ratio: 1,
  },
  app: {
    color: iconoApp,
    negativo: iconoApp,
    ratio: 1,
  },
} as const;

export type LogoVariant = keyof typeof LOGOS;
export type LogoTone = 'color' | 'negativo';

/** §05 Tamaño mínimo digital del logotipo. */
export const LOGO_MIN_WIDTH_PX = 120;
