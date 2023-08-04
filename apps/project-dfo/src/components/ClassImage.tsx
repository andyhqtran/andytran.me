import Image, { ImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';

import { Advancement, ADVANCEMENTS } from '~/constants/advancements';

export type AdvancementImageProps = Omit<ImageProps, 'alt' | 'src'> & {
  id: Advancement['id'];
};

export const AdvancementImage = ({ className, id, ...restOfProps }: AdvancementImageProps) => {
  const advancement = ADVANCEMENTS.find((advancement) => advancement.id === id);

  if (!advancement) return null;

  return (
    <Image
      alt={`Picture of ${advancement.name} (${advancement.name})`}
      className={twMerge('pointer-events-none object-cover', className)}
      fill
      src={`/assets/characters/${advancement.characterId}-${advancement.id}.jpeg`}
      {...restOfProps}
    />
  );
};
