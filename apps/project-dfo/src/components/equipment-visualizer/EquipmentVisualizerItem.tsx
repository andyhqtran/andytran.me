import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const equipmentVisualizerItem = tv({
  base: 'h-12 w-12 cursor-pointer rounded border',
  variants: {
    state: {
      active: 'border-transparent ring-2 ring-blue-7',
      default: 'border-slate-4 bg-slate-1',
    },
  },
  defaultVariants: {
    state: 'default',
  },
});

export type EquipmentVisualizerItemVariants = VariantProps<typeof equipmentVisualizerItem>;

export type EquipmentVisualizerItemProps = ComponentPropsWithoutRef<'button'> & EquipmentVisualizerItemVariants;

export const EquipmentVisualizerItem = forwardRef<HTMLButtonElement, EquipmentVisualizerItemProps>(
  ({ state, ...restOfProps }, forwardedRef) => {
    return <button className={equipmentVisualizerItem({ state })} {...restOfProps} ref={forwardedRef} />;
  },
);

EquipmentVisualizerItem.displayName = 'EquipmentVisualizerItem';
