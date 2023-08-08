import { Badge } from '@several-ui/badge';
import { useSearchParams } from 'next/navigation';
import { tv, VariantProps } from 'tailwind-variants';

const playerEquipment = tv({
  base: 'relative h-7 w-7 rounded border',
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
  const searchParams = useSearchParams();

  const hasDetails = searchParams.has('showDetails');
  const isFeatured = appearance === 'featured';

  return (
    <div className={playerEquipment({ appearance })}>
      {hasDetails && (
        <Badge className='absolute -right-1 -top-1' color={isFeatured ? 'blue' : 'default'} size='sm'>
          +12
        </Badge>
      )}
    </div>
  );
};
