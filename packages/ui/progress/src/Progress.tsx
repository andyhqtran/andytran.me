'use client';
import * as RadixProgress from '@radix-ui/react-progress';
import { tv, VariantProps } from 'tailwind-variants';

export const progress = tv({
  base: 'h-1 overflow-hidden rounded bg-slate-2',
  variants: {
    color: {
      default: 'text-slate-9',
      blue: 'text-blue-9',
      green: 'text-green-9',
      red: 'text-red-9',
      yellow: 'text-yellow-9',
    },
    size: {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type ProgressVariants = VariantProps<typeof progress>;

export type ProgressProps = Omit<RadixProgress.ProgressProps, keyof ProgressVariants> & ProgressVariants;

export const Progress = ({ className, color, size, value = 23, ...restOfProps }: ProgressProps) => {
  return (
    <RadixProgress.Root
      className={progress({ className, color, size })}
      data-testid='PROGRESS'
      value={value}
      {...restOfProps}
    >
      <RadixProgress.Indicator
        className='h-full w-full rounded bg-current transition-transform duration-100 ease-linear'
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
      />
    </RadixProgress.Root>
  );
};
