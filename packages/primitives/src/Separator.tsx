"use client";
import * as RadixSeparator from "@radix-ui/react-separator";
import classNames from "classnames";

export type SeparatorProps = Pick<
  RadixSeparator.SeparatorProps,
  "className" | "decorative" | "orientation"
>;

export const Separator = ({
  className,
  decorative,
  orientation = "horizontal",
}: SeparatorProps) => {
  return (
    <RadixSeparator.Root
      className={classNames(
        "bg-slate-4",
        "radix-orientation-horizontal:h-px radix-orientation-horizontal:w-full",
        "radix-orientation-vertical:h-full radix-orientation-vertical:w-px",
        className,
      )}
      decorative={decorative}
      orientation={orientation}
    />
  );
};
