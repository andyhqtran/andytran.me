import { StarIcon } from "@radix-ui/react-icons";
import { type IconProps } from "@radix-ui/react-icons/dist/types";
import classNames from "classnames";
import {
  type ComponentProps,
  type ForwardRefExoticComponent,
  forwardRef,
  type RefAttributes,
} from "react";

export type IconButtonAppearance = "fill" | "ghost" | "outline";

export type IconButtonSize = "xs" | "sm" | "md" | "lg";

const BUTTON_APPEARANCE_CLASS_NAMES: { [Key in IconButtonAppearance]: string } =
  {
    fill: "border border-transparent bg-slate-3 hover:bg-slate-4 active:border-slate-6 active:bg-slate-5",
    ghost:
      "border border-transparent bg-transparent hover:bg-slate-2 active:bg-slate-3",
    outline:
      "border border-slate-6 bg-transparent hover:bg-slate-2 active:bg-slate-3",
  };

const BUTTON_SIZE_CLASS_NAMES: { [Key in IconButtonSize]: string } = {
  lg: "h-14 w-14 text-lg",
  md: "h-12 w-12 text-lg",
  sm: "h-10 w-10 text-base",
  xs: "h-8 w-8 text-sm",
};

const ICON_SIZE_CLASS_NAMES: { [Key in IconButtonSize]: string } = {
  lg: "h-5 w-5",
  md: "h-4 w-4",
  sm: "h-4 w-4",
  xs: "h-3 w-3",
};

export type IconButtonProps = Pick<
  ComponentProps<"button">,
  "className" | "onClick" | "type"
> & {
  appearance?: IconButtonAppearance;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  size?: IconButtonSize;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      appearance = "fill",
      className,
      icon: Icon = StarIcon,
      onClick,
      size = "sm",
      type = "button",
    },
    forwardedRef,
  ) => {
    return (
      <button
        className={classNames(
          "flex cursor-pointer items-center justify-center rounded-full text-slate-12 outline-none",
          "focus-visible:ring-2 focus-visible:ring-blue-7",
          BUTTON_APPEARANCE_CLASS_NAMES[appearance],
          BUTTON_SIZE_CLASS_NAMES[size],
          className,
        )}
        onClick={onClick}
        ref={forwardedRef}
        type={type}
      >
        <Icon
          className={classNames(
            "block text-current",
            ICON_SIZE_CLASS_NAMES[size],
          )}
        />
      </button>
    );
  },
);

IconButton.displayName = "IconButton";
