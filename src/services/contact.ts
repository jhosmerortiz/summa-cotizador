import { BRAND } from '@/config/brand';
import { CONTACT, CONTACT_CHANNELS, WHATSAPP_NUMBER } from '@/content/site';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export type Interest = (typeof CONTACT.interestOptions)[number]['value'];

export interface ContactRequest {
  name: string;
  company: string;
  interest: Interest;
  message: string;
}

export function buildContactWhatsAppUrl(data: ContactRequest): string {
  const interestLabel = CONTACT.interestOptions.find((option) => option.value === data.interest)?.label ?? '';

  const company = data.company.trim();
  const message = data.message.trim();

  const lines = [
    `Hola, quisiera recibir información sobre ${BRAND.signature}.`,
    '',
    `Nombre: ${data.name.trim()}`,
    ...(company ? [`Empresa: ${company}`] : []),
    `Necesito cotizar: ${interestLabel}`,
    ...(message ? ['', message] : []),
  ];

  return buildWhatsAppUrl(WHATSAPP_NUMBER, lines.join('\n'));
}


export function buildContactMailto(data: ContactRequest): string {
  const interestLabel = CONTACT.interestOptions.find((option) => option.value === data.interest)?.label ?? '';

  const company = data.company.trim();
  const message = data.message.trim();

  const lines = [
    `Hola, quisiera recibir información sobre ${BRAND.signature}.`,
    '',
    `Nombre: ${data.name.trim()}`,
    ...(company ? [`Empresa: ${company}`] : []),
    `Necesito cotizar: ${interestLabel}`,
    ...(message ? ['', message] : []),
  ];

  const subject = `Solicitud de información — ${BRAND.name}`;
  const query = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;

  return `${CONTACT_CHANNELS.email.href}?${query}`;
}
