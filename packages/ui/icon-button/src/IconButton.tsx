import { type ComponentPropsWithoutRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

export const iconButton = tv(
  {
    base: 'inline-flex cursor-pointer items-center justify-center rounded border-0 bg-transparent text-center font-medium text-slate-12 transition-colors',
    variants: {
      appearance: {
        primary: 'border-0 bg-blue-9 text-white hover:bg-blue-10',
        secondary: 'border border-slate-6 bg-transparent text-slate-12 hover:bg-slate-4',
        tertiary: 'border-0 bg-transparent text-slate-12 hover:bg-slate-4',
      },
      size: {
        lg: 'h-10 w-10 text-sm',
        md: 'h-8 w-8 text-sm',
        sm: 'h-6 w-6 text-xs',
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

export type IconButtonVariants = VariantProps<typeof iconButton>;

export type IconButtonProps = IconButtonVariants & Omit<ComponentPropsWithoutRef<'button'>, 'prefix'>;

export const IconButton = ({ appearance, children, size, ...restOfProps }: IconButtonProps) => {
  return (
    <button className={iconButton({ appearance, size })} data-testid='ICON_BUTTON' {...restOfProps}>
      {children}
    </button>
  );
};
