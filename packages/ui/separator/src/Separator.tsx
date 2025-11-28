"use client";
import * as RadixSeparator from "@radix-ui/react-separator";
import { tv, type VariantProps } from "tailwind-variants";

export const separator = tv({
  base: "bg-slate-6",
  defaultVariants: {
    orientation: "horizontal",
  },
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px",
    },
  },
});

export type SeparatorVariants = VariantProps<typeof separator>;

export type SeparatorProps = RadixSeparator.SeparatorProps & SeparatorVariants;

export const Separator = ({
  className,
  orientation,
  ...restOfProps
}: SeparatorProps) => {
  return (
    <RadixSeparator.Root
      className={separator({ className, orientation })}
      data-testid="SEPARATOR"
      orientation={orientation}
      {...restOfProps}
    />
  );
};
