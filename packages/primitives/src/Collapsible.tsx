"use client";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export type CollapsibleProps = Pick<
  RadixCollapsible.CollapsibleProps,
  "className"
> &
  Pick<RadixCollapsible.CollapsibleProps, "children"> & {
    title: RadixCollapsible.CollapsibleTriggerProps["children"];
  };

export const Collapsible = ({
  children,
  className,
  title,
}: CollapsibleProps) => {
  return (
    <RadixCollapsible.Root className={className}>
      <div className="flex items-center gap-3 border-slate-4 border-b py-3">
        <RadixCollapsible.Trigger className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-4">
          <ChevronDownIcon className="block h-2.5 w-2.5" />
        </RadixCollapsible.Trigger>
        <div className="font-semibold text-sm">{title}</div>
      </div>
      <RadixCollapsible.Content className="radix-state-closed:animate-collapsible-slide-up radix-state-open:animate-collapsible-slide-down overflow-hidden">
        {children}
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  );
};
