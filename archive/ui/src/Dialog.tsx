import * as RadixDialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { IconButton } from "./IconButton";

export type DialogProps = Pick<
  RadixDialog.DialogProps,
  "defaultOpen" | "modal" | "onOpenChange" | "open"
> &
  RadixDialog.DialogContentProps & {
    description?: string;
    title: string;
    trigger?: RadixDialog.DialogTriggerProps["children"];
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
    <RadixDialog.Root
      defaultOpen={defaultOpen}
      modal={modal}
      onOpenChange={onOpenChange}
      open={open}
    >
      {!!trigger && (
        <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      )}

      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 bg-slate-1 opacity-80" />
        <RadixDialog.Content
          className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 flex max-h-[80vh] w-full max-w-[calc(100%-48px)] flex-col rounded border border-slate-4 bg-slate-1 shadow-lg sm:max-w-2xl"
          {...restOfProps}
        >
          {(!!title || !!description) && (
            <div className="flex justify-between gap-8 border-slate-4 border-b px-6 py-4">
              <div className="flex flex-col gap-1">
                {!!title && (
                  <RadixDialog.Title className="truncate font-semibold text-base text-slate-12">
                    {title}
                  </RadixDialog.Title>
                )}
                {!!description && (
                  <RadixDialog.Description className="line-clamp-2 text-slate-11 text-xs">
                    {description}
                  </RadixDialog.Description>
                )}
              </div>
              <RadixDialog.Close asChild>
                <IconButton appearance="outline" color="slate" size="sm">
                  <Cross2Icon className="h-3 w-3" />
                </IconButton>
              </RadixDialog.Close>
            </div>
          )}

          <div className="overflow-y-auto p-6">{children}</div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
