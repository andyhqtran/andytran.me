"use client";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { twMerge } from "tailwind-merge";

export type CollapsibleCardProps = Omit<
  RadixCollapsible.CollapsibleProps,
  "children"
> &
  Pick<RadixCollapsible.CollapsibleContentProps, "children"> & {
    title: string;
  };

export const CollapsibleCard = ({
  children,
  className,
  title,
  ...restOfProps
}: CollapsibleCardProps) => {
  return (
    <RadixCollapsible.Root
      className={twMerge(
        "overflow-hidden rounded border border-slate-6 bg-slate-3",
        className,
      )}
      {...restOfProps}
    >
      <div className="flex h-12 items-center justify-between px-4">
        <h3 className="text-slate-12 text-sm font-medium">{title}</h3>
        <RadixCollapsible.Trigger className="radix-state-open:rotate-180 border-slate-5 hover:bg-slate-3 flex h-6 w-6 items-center justify-center rounded-full border transition-transform">
          <ChevronDownIcon className="text-slate-11 h-3 w-3" />
        </RadixCollapsible.Trigger>
      </div>

      <RadixCollapsible.Content className="border-t-slate-6 bg-slate-2 text-slate-11 overflow-hidden border-t p-4 text-xs">
        {children}
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  );
};
