"use client";
import * as RadixProgress from "@radix-ui/react-progress";
import { tv, type VariantProps } from "tailwind-variants";

export const progress = tv({
  base: "h-1 overflow-hidden rounded bg-slate-2",
  defaultVariants: {
    size: "md",
  },
  variants: {
    color: {
      blue: "text-blue-9",
      default: "text-slate-9",
      green: "text-green-9",
      red: "text-red-9",
      yellow: "text-yellow-9",
    },
    size: {
      lg: "h-3",
      md: "h-2",
      sm: "h-1",
    },
  },
});

export type ProgressVariants = VariantProps<typeof progress>;

export type ProgressProps = Omit<
  RadixProgress.ProgressProps,
  keyof ProgressVariants
> &
  ProgressVariants;

export const Progress = ({
  className,
  color,
  size,
  value = 23,
  ...restOfProps
}: ProgressProps) => {
  return (
    <RadixProgress.Root
      className={progress({ className, color, size })}
      data-testid="PROGRESS"
      value={value}
      {...restOfProps}
    >
      <RadixProgress.Indicator
        className="h-full w-full rounded bg-current transition-transform duration-100 ease-linear"
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
      />
    </RadixProgress.Root>
  );
};
