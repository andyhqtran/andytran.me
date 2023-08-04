import { tv, VariantProps } from 'tailwind-variants';

const playerEquipment = tv({
  base: 'h-6 w-6 rounded border transition-colors',
  variants: {
    appearance: {
      default: 'border-slate-5 bg-slate-2',
      featured: 'border-blue-5 bg-blue-2',
    },
  },
  defaultVariants: {
    appearance: 'default',
  },
});

export type PlayerEquipmentVariants = VariantProps<typeof playerEquipment>;

export type PlayerEquipmentProps = PlayerEquipmentVariants;

export const PlayerEquipment = ({ appearance }: PlayerEquipmentProps) => {
  return <div className={playerEquipment({ appearance })} />;
};
