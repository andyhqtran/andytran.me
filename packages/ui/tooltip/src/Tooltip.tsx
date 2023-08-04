import * as RadixTooltip from '@radix-ui/react-tooltip';
import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type TooltipProps = RadixTooltip.TooltipProps &
  RadixTooltip.TooltipContentProps & {
    label: ReactNode | string;
  };

  export const Tooltip = ({
  children,
  className,
  defaultOpen,
  delayDuration,
  disableHoverableContent,
  label,
  open,
  onOpenChange,
  sideOffset = 8,
  ...restOfProps
}: TooltipProps) => {
  return (
    <RadixTooltip.Root
      defaultOpen={defaultOpen}
      delayDuration={delayDuration}
      disableHoverableContent={disableHoverableContent}
      open={open}
      onOpenChange={onOpenChange}
    >
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          className={twMerge(
            'max-h-screen overflow-y-auto rounded border border-slate-4 bg-slate-1 py-2 px-4 text-xs shadow-sm',
            className,
          )}
          sideOffset={sideOffset}
          {...restOfProps}
        >
          {label}
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};

export { TooltipProvider } from '@radix-ui/react-tooltip';
