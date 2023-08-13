'use client';
import * as RadixSeparator from '@radix-ui/react-separator';
import { tv, VariantProps } from 'tailwind-variants';

export const separator = tv({
  base: 'bg-slate-6',
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export type SeparatorVariants = VariantProps<typeof separator>;

export type SeparatorProps = RadixSeparator.SeparatorProps & SeparatorVariants;

export const Separator = ({ className, orientation, ...restOfProps }: SeparatorProps) => {
  return (
    <RadixSeparator.Root
      className={separator({ orientation, className })}
      orientation={orientation}
      data-testid='SEPARATOR'
      {...restOfProps}
    />
  );
};
