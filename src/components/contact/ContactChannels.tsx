import type { ReactNode } from 'react';
import { CONTACT_CHANNELS, type ContactChannel } from '@/content/site';

interface ContactChannelsProps {
  /** "cards": tarjetas destacadas (sección de contacto). "list": enlaces compactos sobre fondo oscuro (footer). */
  variant?: 'cards' | 'list';
}

const CHANNELS: ContactChannel[] = Object.values(CONTACT_CHANNELS);

interface ChannelItemProps {
  href?: string;
  className: string;
  ariaLabel?: string;
  children: ReactNode;
}

/**
 * Renderiza el canal como enlace si tiene `href`; si no, solo como texto.
 * Los enlaces web (WhatsApp) se abren en otra pestaña para no sacar al visitante de la landing.
 */
function ChannelItem({ href, className, ariaLabel, children }: ChannelItemProps) {
  if (!href) {
    return <div className={`group ${className}`}>{children}</div>;
  }

  const external = href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a href={href} aria-label={ariaLabel} className={`group ${className}`} {...external}>
      {children}
    </a>
  );
}

export function ContactChannels({ variant = 'cards' }: ContactChannelsProps) {
  if (variant === 'list') {
    return (
      <ul className="flex flex-col gap-3">
        {CHANNELS.map(({ label, display, href, icon: Icon }) => (
          <li key={label}>
            <ChannelItem
              href={href}
              ariaLabel={`${label}: ${display}`}
              className="inline-flex items-center gap-2.5 text-sm text-white/75 transition-colors hover:text-brand-teal"
            >
              <Icon aria-hidden="true" className="size-4 text-brand-teal" />
              {display}
            </ChannelItem>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid max-w-md gap-3">
      {CHANNELS.map(({ label, display, href, icon: Icon }) => (
        <li key={label}>
          <ChannelItem
            href={href}
            className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-teal hover:bg-white hover:shadow-lg hover:shadow-brand-navy/10"
          >
            <span
              className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-blue text-white transition-colors group-hover:bg-brand-teal group-hover:text-brand-navy"
            >
              <Icon aria-hidden="true" className="size-5" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</span>
              <span className="break-all font-semibold text-brand-navy sm:break-normal">{display}</span>
            </span>
          </ChannelItem>
        </li>
      ))}
    </ul>
  );
}
