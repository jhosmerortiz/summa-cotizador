import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline-light';
export type ButtonSize = 'sm' | 'md';

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60';

const SIZES: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-sm sm:text-base',
};

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-brand-teal text-brand-navy shadow-lg shadow-brand-teal/25 hover:-translate-y-0.5 hover:bg-white',
  secondary: 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20 hover:-translate-y-0.5 hover:bg-brand-navy',
  'outline-light': 'border border-white/30 text-white hover:border-brand-teal hover:text-brand-teal',
};

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type ButtonAsLink = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = 'primary', size = 'md', icon, children, className = '', ...rest } = props;
  const classes = `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon}
    </>
  );

  if (rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
