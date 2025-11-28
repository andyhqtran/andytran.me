import { type ComponentProps, type ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const banner = tv({
  base: "flex items-center gap-4 rounded border",
  defaultVariants: {
    appearance: "default",
    size: "md",
  },
  variants: {
    appearance: {
      danger: "border-red-7 bg-red-3 text-red-11",
      default: "border-slate-7 bg-slate-3 text-slate-11",
      info: "border-blue-7 bg-blue-3 text-blue-11",
      warning: "border-yellow-7 bg-yellow-3 text-yellow-11",
    },
    size: {
      lg: "p-4 text-sm",
      md: "px-4 py-3 text-sm",
      sm: "px-4 py-2 text-xs",
    },
  },
});

export type BannerVariants = VariantProps<typeof banner>;

export type BannerProps = Omit<
  ComponentProps<"div">,
  keyof BannerVariants | "prefix"
> &
  BannerVariants & {
    prefix?: ReactNode;
    suffix?: ReactNode;
  };

export const Banner = ({
  appearance,
  children,
  className,
  prefix,
  size,
  suffix,
  ...restOfProps
}: BannerProps) => {
  return (
    <div className={banner({ appearance, className, size })} {...restOfProps}>
      {!!prefix && <div className="shrink-0">{prefix}</div>}

      <div>{children}</div>

      {!!suffix && <div className="shrink-0">{suffix}</div>}
    </div>
  );
};
