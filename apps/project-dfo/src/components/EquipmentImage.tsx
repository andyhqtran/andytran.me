import Image, { ImageProps } from 'next/image';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { CharacterEquipment } from '~/data/getCharactersEquipment';

export type EquipmentImageProps = ComponentProps<'div'> &
  Pick<ImageProps, 'alt'> & {
    itemId: CharacterEquipment['itemId'];
  };

export const EquipmentImage = ({ alt, className, itemId, ...restOfProps }: EquipmentImageProps) => {
  return (
    <div
      className={twMerge('relative h-8 w-8 overflow-hidden rounded border border-slate-5 bg-slate-2', className)}
      {...restOfProps}
    >
      <Image alt={alt} fill src={`https://img-api.dfoneople.com/df/items/${itemId}`} unoptimized />
    </div>
  );
};
