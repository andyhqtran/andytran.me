import * as RadixDialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { IconButton } from '@several-ui/icon-button';

export type DialogProps = Pick<RadixDialog.DialogProps, 'defaultOpen' | 'modal' | 'onOpenChange' | 'open'> &
  RadixDialog.DialogContentProps & {
    description: string;
    title: string;
    trigger?: RadixDialog.DialogTriggerProps['children'];
  };

export const Dialog = ({
  children,
  defaultOpen,
  description,
  open,
  onOpenChange,
  modal = true,
  title,
  trigger,
  ...restOfProps
}: DialogProps) => {
  return (
    <RadixDialog.Root defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange} modal={modal}>
      {!!trigger && <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>}

      <RadixDialog.Portal>
        <RadixDialog.Overlay className='fixed inset-0 bg-slate-1 opacity-80' />
        <RadixDialog.Content
          className='fixed left-1/2 top-1/2 flex w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 flex-col rounded border border-slate-4 bg-slate-1 shadow-lg'
          {...restOfProps}
        >
          {(!!title || !!description) && (
            <div className='flex justify-between gap-8 border-b border-slate-4 px-6 py-4'>
              <div className='flex flex-col gap-1'>
                {!!title && (
                  <RadixDialog.Title className='truncate text-base font-semibold text-slate-12'>
                    {title}
                  </RadixDialog.Title>
                )}
                {!!description && (
                  <RadixDialog.Description className='line-clamp-2 text-xs text-slate-11'>
                    {description}
                  </RadixDialog.Description>
                )}
              </div>
              <RadixDialog.Close asChild>
                <IconButton appearance='outline' color='slate' size='sm'>
                  <Cross2Icon className='h-3 w-3' />
                </IconButton>
              </RadixDialog.Close>
            </div>
          )}

          <div className='p-6'>{children}</div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
