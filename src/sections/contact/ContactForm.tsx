import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CONTACT } from '@/content/site';
import { buildContactWhatsAppUrl, type ContactRequest } from '@/services/contact';
import { ContactChannels } from '@/components/contact/ContactChannels';

const INITIAL: ContactRequest = { name: '', company: '', interest: 'productos', message: '' };

const FIELD =
  'w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-brand-teal focus:bg-white focus:outline-none';

interface FieldProps {
  id: keyof ContactRequest;
  label: string;
  optional?: boolean;
  children: ReactNode;
}

function Field({ id, label, optional = false, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-brand-navy">
        {label}
        {optional && <span className="ml-1 font-normal normal-case tracking-normal text-muted">(opcional)</span>}
      </label>
      {children}
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<ContactRequest>(INITIAL);
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof ContactRequest) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((current) => ({ ...current, [key]: event.target.value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(buildContactWhatsAppUrl(form), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="flex flex-col items-center gap-5 py-6 text-center">
        <span className="grid size-16 place-items-center rounded-full bg-brand-teal/15 text-brand-teal">
          <MessageCircle className="size-8" />
        </span>
        <h3 className="text-2xl font-bold text-brand-navy">{CONTACT.sentTitle}</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">{CONTACT.sentMessage}</p>
        <div className="w-full text-left">
          <ContactChannels />
        </div>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="text-sm font-semibold text-brand-blue underline-offset-4 hover:underline"
        >
          {CONTACT.sentAgain}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <header className="flex flex-col gap-1">
        <h3 className="text-xl font-bold text-brand-navy">{CONTACT.formTitle}</h3>
        <p className="text-sm text-muted">{CONTACT.formDescription}</p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Nombre">
          <input id="name" name="name" required autoComplete="name" value={form.name} onChange={update('name')} className={FIELD} />
        </Field>

        <Field id="company" label="Empresa" optional>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            value={form.company}
            onChange={update('company')}
            className={FIELD}
          />
        </Field>
      </div>

      <Field id="interest" label="¿Qué necesitas cotizar?">
        <select id="interest" name="interest" value={form.interest} onChange={update('interest')} className={FIELD}>
          {CONTACT.interestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Mensaje" optional>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={update('message')}
          className={`${FIELD} resize-y`}
        />
      </Field>

      <Button type="submit" variant="secondary" className="mt-1 w-full" icon={<Send className="size-4" />}>
        {CONTACT.submitLabel}
      </Button>
    </form>
  );
}
