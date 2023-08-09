'use client';
import * as RadixCollapsible from '@radix-ui/react-collapsible';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { twMerge } from 'tailwind-merge';

export type CollapsibleCardProps = Omit<RadixCollapsible.CollapsibleProps, 'children'> &
  Pick<RadixCollapsible.CollapsibleContentProps, 'children'> & {
    title: string;
  };

export const CollapsibleCard = ({ children, className, title, ...restOfProps }: CollapsibleCardProps) => {
  return (
    <RadixCollapsible.Root
      className={twMerge('overflow-hidden rounded border border-slate-5 bg-slate-2', className)}
      {...restOfProps}
    >
      <div className='flex h-12 items-center justify-between px-4'>
        <h3 className='text-sm font-medium text-slate-12'>{title}</h3>
        <RadixCollapsible.Trigger className='flex h-6 w-6 items-center justify-center rounded-full border border-slate-5 transition-transform hover:bg-slate-3 radix-state-open:rotate-180'>
          <ChevronDownIcon className='h-3 w-3 text-slate-11' />
        </RadixCollapsible.Trigger>
      </div>

      <RadixCollapsible.Content className='overflow-hidden border-t border-t-slate-5 p-4 text-xs text-slate-11'>
        {children}
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  );
};
