import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { HERO, NAV_ITEMS } from '@/content/site';
import { useScrolled } from '@/hooks/useScrolled';

/**
 * Sobre el hero oscuro usa el logotipo en negativo; al hacer scroll el fondo
 * pasa a blanco y se usa la versión a color (Manual §02 / §06: siempre con contraste).
 */
export function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const solid = scrolled || open;

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/95 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-6">
        <a href="#inicio" aria-label="SUMMA by Vertex — inicio" onClick={close} className="shrink-0">
          <Logo variant="horizontal" tone={solid ? 'color' : 'negativo'} width={150} />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-brand-teal ${
                solid ? 'text-brand-navy' : 'text-white/85'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href={HERO.primaryCta.href}
            variant={solid ? 'secondary' : 'primary'}
            size="sm"
            icon={<ArrowRight className="size-4" />}
          >
            {HERO.primaryCta.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className={`rounded-lg p-2 md:hidden ${solid ? 'text-brand-navy' : 'text-white'}`}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {open && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-line bg-white md:hidden">
          <Container className="flex flex-col py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="border-b border-line py-3.5 text-base font-medium text-brand-navy last:border-0"
              >
                {item.label}
              </a>
            ))}
            <Button
              href={HERO.primaryCta.href}
              onClick={close}
              variant="secondary"
              className="mt-4 w-full"
              icon={<ArrowRight className="size-4" />}
            >
              {HERO.primaryCta.label}
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
