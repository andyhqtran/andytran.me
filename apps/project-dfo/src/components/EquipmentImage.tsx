import Image, { ImageProps } from 'next/image';
import { ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { type Item } from '~/types/neople';

export const equipmentImage = tv({
  base: 'relative h-8 w-8 overflow-hidden rounded border border-slate-5 bg-slate-2',
  variants: {
    rarity: {
      common: 'border-green-9 bg-green-2',
      epic: 'border-yellow-9 bg-yellow-2',
      legendary: '',
      rare: 'border-purple-9 bg-purple-2',
      superior: 'border-blue-9 bg-blue-2',
      uncommon: 'border-green-9 bg-green-2',
      unique: '',
    },
  },
  defaultVariants: {
    rarity: 'common',
  },
});
export type EquipmentImageVariants = VariantProps<typeof equipmentImage>;

export type EquipmentImageProps = ComponentProps<'div'> &
  EquipmentImageVariants &
  Pick<ImageProps, 'alt'> &
  Pick<Item, 'itemId'>;

export const EquipmentImage = ({ alt, className, itemId, rarity, ...restOfProps }: EquipmentImageProps) => {
  return (
    <div className={equipmentImage({ rarity, className })} data-rarity={rarity} {...restOfProps}>
      <Image alt={alt} fill sizes='28px' src={`https://img-api.dfoneople.com/df/items/${itemId}`} unoptimized />
    </div>
  );
};
