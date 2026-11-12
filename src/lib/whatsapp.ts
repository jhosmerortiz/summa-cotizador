/**
 * Genera un enlace de WhatsApp (wa.me) con un mensaje opcional ya escrito.
 * Abre la app en el celular y WhatsApp Web en la computadora.
 *
 * @param phone Número en formato internacional solo con dígitos (p. ej. "51987970396").
 */
export function buildWhatsAppUrl(phone: string, message?: string): string {
  const base = `https://wa.me/${phone.replace(/\D/g, '')}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
