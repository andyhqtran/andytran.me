import { type ComponentPropsWithoutRef, ReactNode } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

export const button = tv(
  {
    base: 'inline-flex cursor-pointer items-center justify-center rounded border-0 bg-transparent text-center font-medium text-slate-12 transition-colors',
    variants: {
      appearance: {
        primary: 'border-0 bg-blue-9 text-white hover:bg-blue-10',
        secondary: 'border border-slate-6 bg-transparent text-slate-12 hover:bg-slate-4',
        tertiary: 'border-0 bg-transparent text-slate-12 hover:bg-slate-4',
      },
      size: {
        lg: 'h-10 gap-2 px-4 text-sm',
        md: 'h-8 gap-2 px-3 text-sm',
        sm: 'h-6 gap-1 px-2 text-xs',
      },
    },
    defaultVariants: {
      appearance: 'primary',
      size: 'md',
    },
  },
  {
    twMerge: true,
  },
);

export type ButtonVariants = VariantProps<typeof button>;

export type ButtonProps = ButtonVariants &
  Omit<ComponentPropsWithoutRef<'button'>, 'prefix'> & {
    prefix?: ReactNode;
    suffix?: ReactNode;
  };

export const Button = ({ appearance, children, prefix, size, suffix, ...restOfProps }: ButtonProps) => {
  return (
    <button className={button({ appearance, size })} data-testid='BUTTON' {...restOfProps}>
      {!!prefix && <div className='shrink-0'>{prefix}</div>}

      {children}

      {!!suffix && <div className='shrink-0'>{suffix}</div>}
    </button>
  );
};
