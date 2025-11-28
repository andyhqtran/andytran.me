import { type ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const badge = tv({
  base: "inline-flex items-center justify-center rounded-full text-center font-semibold",
  defaultVariants: {
    color: "default",
    size: "md",
  },
  variants: {
    color: {
      blue: "bg-blue-5 text-blue-11",
      default: "bg-slate-5 text-slate-11",
      green: "bg-green-5 text-green-11",
      red: "bg-red-5 text-red-11",
      yellow: "bg-yellow-5 text-yellow-11",
    },
    size: {
      lg: "h-6 px-2 text-xs",
      md: "h-5 px-2 text-[10px]",
      sm: "h-4 px-2 text-[8px]",
    },
  },
});

export type BadgeVariants = VariantProps<typeof badge>;

export type BadgeProps = Omit<ComponentProps<"div">, keyof BadgeVariants> &
  BadgeVariants;

export const Badge = ({
  className,
  color,
  size,
  ...restOfProps
}: BadgeProps) => {
  return (
    <div
      className={badge({ className, color, size })}
      data-testid="BADGE"
      {...restOfProps}
    />
  );
};
