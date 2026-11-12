import type { ReactNode } from 'react';
import { Target, Zap } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';

const ROWS = [
  { type: 'Producto', width: '60%' },
  { type: 'Servicio', width: '85%' },
  { type: 'Producto', width: '45%' },
] as const;

function Bar({ className = '', width }: { className?: string; width?: string }) {
  return <span aria-hidden="true" className={`block h-2.5 rounded-full bg-line ${className}`} style={{ width }} />;
}

interface FloatingBadgeProps {
  icon: ReactNode;
  label: string;
  className: string;
}

function FloatingBadge({ icon, label, className }: FloatingBadgeProps) {
  return (
    <div
      className={`absolute items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-brand-navy shadow-xl shadow-black/25 ${className}`}
    >
      <span className="grid size-8 place-items-center rounded-xl bg-brand-teal text-brand-navy">{icon}</span>
      {label}
    </div>
  );
}

/**
 * Ilustración de una cotización (interfaz digital, Manual §07).
 * Usa líneas esquemáticas en lugar de cifras para no mostrar datos ficticios.
 */
export function QuoteMockup() {
  return (
    <figure aria-label="Ilustración de una cotización con SUMMA" className="relative mx-auto w-full max-w-md">
      <div className="animate-float rounded-3xl bg-white p-6 shadow-2xl shadow-black/30 sm:p-8">
        <div className="flex items-center gap-3 border-b border-line pb-5">
          <Logo variant="app" width={44} />
          <div className="flex flex-1 flex-col gap-1.5">
            <span className="text-sm font-bold text-brand-navy">Cotización</span>
            <Bar width="40%" />
          </div>
        </div>

        <ul className="flex flex-col divide-y divide-line">
          {ROWS.map((row, index) => (
            <li key={index} className="flex items-center gap-4 py-4">
              <span
                className={`w-20 shrink-0 rounded-md px-2 py-1 text-center text-[11px] font-semibold ${
                  row.type === 'Producto' ? 'bg-brand-blue/10 text-brand-blue' : 'bg-brand-teal/20 text-brand-navy'
                }`}
              >
                {row.type}
              </span>
              <div className="flex-1">
                <Bar width={row.width} />
              </div>
              <Bar className="w-12 shrink-0" />
            </li>
          ))}
        </ul>

        <div className="mt-2 flex items-center justify-between rounded-2xl bg-brand-navy px-5 py-4">
          <span className="text-sm font-semibold text-white">Total</span>
          <span aria-hidden="true" className="block h-3 w-24 rounded-full bg-brand-teal" />
        </div>
      </div>

      <FloatingBadge
        icon={<Zap className="size-4" />}
        label="Agilidad"
        className="-right-3 -top-6 hidden sm:flex lg:-right-8"
      />
      <FloatingBadge
        icon={<Target className="size-4" />}
        label="Precisión"
        className="-bottom-7 -left-3 hidden sm:flex lg:-left-10"
      />
    </figure>
  );
}
