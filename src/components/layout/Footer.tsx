import { ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { ContactChannels } from '@/components/contact/ContactChannels';
import { Container } from '@/components/ui/Container';
import { BRAND } from '@/config/brand';
import { FOOTER, NAV_ITEMS } from '@/content/site';

const CURRENT_YEAR = new Date().getFullYear();

function ColumnTitle({ children }: { children: string }) {
  return <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">{children}</h2>;
}

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <Logo variant="horizontal" tone="negativo" width={180} />
          <p className="max-w-sm text-sm leading-relaxed text-white/65">{FOOTER.description}</p>
        </div>

        <nav aria-label="Pie de página" className="flex flex-col gap-4">
          <ColumnTitle>{BRAND.name}</ColumnTitle>
          <ul className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-white/70 transition-colors hover:text-brand-teal">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-4">
          <ColumnTitle>{FOOTER.contactTitle}</ColumnTitle>
          <ContactChannels variant="list" />
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="leading-relaxed">
            © {CURRENT_YEAR} <span className="font-semibold text-white/80">{BRAND.name}</span>
            <span aria-hidden="true" className="mx-2 text-brand-teal">
              |
            </span>
            by{' '}
            <a
              href={BRAND.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-white/80 underline decoration-brand-teal/50 underline-offset-4 transition-colors hover:text-brand-teal hover:decoration-brand-teal"
            >
              {BRAND.companyLegalName}
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
              <span className="sr-only">(abre en una pestaña nueva)</span>
            </a>
            . Todos los derechos reservados.
          </p>
          <p className="font-semibold uppercase tracking-[0.18em] text-white/60">{BRAND.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}
