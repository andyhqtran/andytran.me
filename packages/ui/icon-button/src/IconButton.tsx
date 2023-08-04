import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

export const iconButton = tv(
  {
    base: 'inline-flex shrink-0 cursor-pointer items-center justify-center rounded border-0 bg-transparent text-center font-medium text-slate-12 outline-none disabled:cursor-not-allowed disabled:opacity-60 disabled:grayscale',
    variants: {
      appearance: {
        default: '',
        ghost: '',
        outline: '',
        text: '',
      },
      color: {
        blue: '',
        green: '',
        red: '',
        slate: '',
        yellow: '',
      },
      size: {
        lg: 'h-10 w-10 text-sm',
        md: 'h-8 w-8 text-sm',
        sm: 'h-6 w-6 text-xs',
        xs: 'h-4 w-4 text-xs',
      },
    },
    compoundVariants: [
      {
        appearance: 'default',
        color: 'blue',
        class: 'bg-blue-9 text-blue-1 hover:bg-blue-10 active:bg-blue-11 disabled:bg-blue-9',
      },
      {
        appearance: 'default',
        color: 'green',
        class: 'bg-green-9 text-green-1 hover:bg-green-10 active:bg-green-11 disabled:bg-green-9',
      },
      {
        appearance: 'default',
        color: 'red',
        class: 'bg-red-9 text-red-1 hover:bg-red-10 active:bg-red-11 disabled:bg-red-9',
      },
      {
        appearance: 'default',
        color: 'slate',
        class: 'bg-slate-9 text-slate-1 hover:bg-slate-10 active:bg-slate-11 disabled:bg-slate-9',
      },
      {
        appearance: 'default',
        color: 'yellow',
        class: 'bg-yellow-9 text-yellow-1 hover:bg-yellow-10 active:bg-yellow-11 disabled:bg-yellow-9',
      },
      {
        appearance: 'ghost',
        color: 'blue',
        class: 'bg-blue-3 text-blue-11 hover:bg-blue-4 active:bg-blue-5 disabled:bg-blue-3',
      },
      {
        appearance: 'ghost',
        color: 'green',
        class: 'bg-green-3 text-green-11 hover:bg-green-4 active:bg-green-5 disabled:bg-green-3',
      },
      {
        appearance: 'ghost',
        color: 'red',
        class: 'bg-red-3 text-red-11 hover:bg-red-4 active:bg-red-5 disabled:bg-red-3',
      },
      {
        appearance: 'ghost',
        color: 'slate',
        class: 'bg-slate-3 text-slate-11 hover:bg-slate-4 active:bg-slate-5 disabled:bg-slate-3',
      },
      {
        appearance: 'ghost',
        color: 'yellow',
        class: 'bg-yellow-3 text-yellow-11 hover:bg-yellow-4 active:bg-yellow-5 disabled:bg-yellow-3',
      },
      {
        appearance: 'outline',
        color: 'blue',
        class: 'border border-blue-6 bg-blue-1 text-blue-11 hover:bg-blue-2 active:bg-blue-3 disabled:bg-transparent',
      },
      {
        appearance: 'outline',
        color: 'green',
        class:
          'border border-green-6 bg-green-1 text-green-11 hover:bg-green-2 active:bg-green-3 disabled:bg-transparent',
      },
      {
        appearance: 'outline',
        color: 'red',
        class: 'border border-red-6 bg-red-1 text-red-11 hover:bg-red-2 active:bg-red-3 disabled:bg-transparent',
      },
      {
        appearance: 'outline',
        color: 'slate',
        class:
          'border border-slate-6 bg-slate-1 text-slate-11 hover:bg-slate-2 active:bg-slate-3 disabled:bg-transparent',
      },
      {
        appearance: 'outline',
        color: 'yellow',
        class:
          'border border-yellow-6 bg-yellow-1 text-yellow-11 hover:bg-yellow-2 active:bg-yellow-3 disabled:bg-transparent',
      },
      {
        appearance: 'text',
        color: 'blue',
        class: 'bg-transparent text-blue-11 hover:bg-blue-2 active:bg-blue-3 disabled:bg-transparent',
      },
      {
        appearance: 'text',
        color: 'green',
        class: 'bg-transparent text-green-11 hover:bg-green-2 active:bg-green-3 disabled:bg-transparent',
      },
      {
        appearance: 'text',
        color: 'red',
        class: 'bg-transparent text-red-11 hover:bg-red-2 active:bg-red-3 disabled:bg-transparent',
      },
      {
        appearance: 'text',
        color: 'slate',
        class: 'bg-transparent text-slate-11 hover:bg-slate-2 active:bg-slate-3 disabled:bg-transparent',
      },
      {
        appearance: 'text',
        color: 'yellow',
        class: 'bg-transparent text-yellow-11 hover:bg-yellow-2 active:bg-yellow-3 disabled:bg-transparent',
      },
    ],
    defaultVariants: {
      appearance: 'default',
      color: 'blue',
      size: 'md',
    },
  },
  {
    twMerge: true,
  },
);

export type IconButtonVariants = VariantProps<typeof iconButton>;

export type IconButtonProps = IconButtonVariants & Omit<ComponentPropsWithoutRef<'button'>, 'prefix'>;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ appearance, children, className, color, size, ...restOfProps }, forwardedRef) => {
    return (
      <button
        className={iconButton({ appearance, color, size, className })}
        data-testid='ICON_BUTTON'
        {...restOfProps}
        ref={forwardedRef}
      >
        {children}
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';
