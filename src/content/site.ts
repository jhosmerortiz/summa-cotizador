/**
 * Contenido de la landing page.
 *
 * Todos los textos provienen del Manual de marca SUMMA (§01 Esencia de marca,
 * §04 Jerarquía tipográfica) o del propósito del producto: cotización
 * automática de productos y servicios. Edita los textos aquí, no en los
 * componentes.
 */
import type { LucideIcon } from 'lucide-react';
import { Briefcase, ChartNoAxesCombined, ListChecks, Mail, MessageCircle, Package, Target, Zap } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SECTION_IDS = {
  about: 'que-es',
  solutions: 'soluciones',
  attributes: 'atributos',
  contact: 'contacto',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: '¿Qué es SUMMA?', href: `#${SECTION_IDS.about}` },
  { label: 'Productos y servicios', href: `#${SECTION_IDS.solutions}` },
  { label: 'Atributos', href: `#${SECTION_IDS.attributes}` },
];

export const HERO = {
  eyebrow: 'Plataforma de cotización automática',
  title: 'Impulsa tus ventas',
  highlight: 'con cotizaciones ágiles',
  description:
    'SUMMA by Vertex es una solución que simplifica y acelera el proceso de cotización, ayudando a tu equipo a cerrar más oportunidades.',
  primaryCta: { label: 'Solicitar información', href: `#${SECTION_IDS.contact}` },
  secondaryCta: { label: 'Conocer SUMMA', href: `#${SECTION_IDS.about}` },
} as const;

export const ABOUT = {
  eyebrow: '¿Qué es SUMMA?',
  title: 'Cotizaciones rápidas, claras y profesionales',
  description:
    'SUMMA es una plataforma de cotización automática desarrollada por Vertex. Ayuda a las empresas a impulsar sus ventas mediante cotizaciones rápidas, claras y profesionales.',
  personalityLabel: 'Una marca',
  /** §01 Personalidad de marca */
  personality: ['Moderna', 'Tecnológica', 'Confiable', 'Eficiente'],
} as const;

export const SOLUTIONS = {
  eyebrow: 'Productos y servicios',
  title: 'Lo que ofrezcas, cotízalo con agilidad',
  description:
    'SUMMA se adapta a lo que vende tu empresa: productos, servicios o ambos, siempre con la misma claridad y precisión.',
  items: [
    {
      title: 'Cotización de productos',
      description:
        'Cotiza los productos de tu empresa con información ordenada y fácil de entender para tus clientes.',
      icon: Package,
    },
    {
      title: 'Cotización de servicios',
      description:
        'Cotiza los servicios que ofreces con propuestas consistentes, confiables y profesionales.',
      icon: Briefcase,
    },
  ] satisfies Feature[],
} as const;

export const ATTRIBUTES = {
  eyebrow: 'Atributos de marca',
  title: 'Cuatro pilares en cada cotización',
  /** §01 Esencia de marca — textos oficiales del manual */
  items: [
    {
      title: 'Agilidad',
      description: 'Respuestas rápidas y procesos simples.',
      icon: Zap,
    },
    {
      title: 'Claridad',
      description: 'Información ordenada y fácil de entender.',
      icon: ListChecks,
    },
    {
      title: 'Precisión',
      description: 'Cotizaciones consistentes y confiables.',
      icon: Target,
    },
    {
      title: 'Escalabilidad',
      description: 'Una solución preparada para crecer con el negocio.',
      icon: ChartNoAxesCombined,
    },
  ] satisfies Feature[],
} as const;

export const STATEMENT = {
  quote: 'Cotizar no debería frenar una venta.',
  description:
    'SUMMA simplifica y acelera el proceso de cotización para que tu equipo se enfoque en cerrar más oportunidades.',
} as const;

/** Número de WhatsApp de Vertex en formato internacional (solo dígitos). */
export const WHATSAPP_NUMBER = '51987970396';

/** Mensaje que se precarga al abrir WhatsApp desde los enlaces directos. */
export const WHATSAPP_GREETING = 'Hola, quisiera recibir información sobre SUMMA by Vertex.';

export interface ContactChannel {
  label: string;
  display: string;
  /** Si no se define, el canal solo se muestra como texto (sin enlace). */
  href?: string;
  icon: LucideIcon;
}

/** Canales oficiales de contacto de Vertex. */
export const CONTACT_CHANNELS = {
  whatsapp: {
    label: 'WhatsApp',
    display: '+51 987 970 396',
    href: buildWhatsAppUrl(WHATSAPP_NUMBER, WHATSAPP_GREETING),
    icon: MessageCircle,
  },
  email: {
    label: 'Correo',
    display: 'contacto@vertexdev.tech',
    // Sin enlace por ahora: solo se muestra. Para activarlo, agrega href: 'mailto:contacto@vertexdev.tech'.
    href: undefined,
    icon: Mail,
  },
} satisfies Record<string, ContactChannel>;

export const CONTACT = {
  eyebrow: 'Contacto',
  title: 'Impulsa tus ventas con SUMMA',
  description:
    'Escríbenos por WhatsApp o por correo y conoce cómo SUMMA puede ayudar a tu equipo a cotizar productos y servicios de forma ágil.',
  formTitle: 'Solicita información',
  formDescription: 'Completa tus datos y continúa la conversación por WhatsApp con tu mensaje listo.',
  interestOptions: [
    { value: 'productos', label: 'Productos' },
    { value: 'servicios', label: 'Servicios' },
    { value: 'ambos', label: 'Productos y servicios' },
  ],
  submitLabel: 'Enviar por WhatsApp',
  sentTitle: 'Continúa en WhatsApp',
  sentMessage:
    'Abrimos WhatsApp en una pestaña nueva con tu mensaje listo; solo falta presionar “Enviar”. Si no se abrió, escríbenos directamente:',
  sentAgain: 'Volver al formulario',
} as const;

export const FOOTER = {
  description: 'Plataforma de cotización automática de productos y servicios desarrollada por Vertex.',
  contactTitle: 'Contacto',
} as const;
