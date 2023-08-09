import type { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

export const badge = tv({
  base: 'inline-flex items-center justify-center rounded-full text-center font-semibold',
  variants: {
    color: {
      default: 'bg-slate-5 text-slate-11',
      blue: 'bg-blue-5 text-blue-11',
      green: 'bg-green-5 text-green-11',
      red: 'bg-red-5 text-red-11',
      yellow: 'bg-yellow-5 text-yellow-11',
    },
    size: {
      sm: 'h-4 px-2 text-[8px]',
      md: 'h-5 px-2 text-[10px]',
      lg: 'h-6 px-2 text-xs',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
  },
});

export type BadgeVariants = VariantProps<typeof badge>;

export type BadgeProps = Omit<ComponentProps<'div'>, keyof BadgeVariants> & BadgeVariants;

export const Badge = ({ className, color, size, ...restOfProps }: BadgeProps) => {
  return <div className={badge({ color, size, className })} data-testid='BADGE' {...restOfProps} />;
};
