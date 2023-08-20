import { CharacterCardSkeleton } from '~/components/CharacterCardSkeleton';

export const RankingsCharacterListSkeleton = () => {
  return (
    <div className='flex flex-col gap-4'>
      <CharacterCardSkeleton size='sm' />
      <CharacterCardSkeleton size='sm' />
      <CharacterCardSkeleton size='sm' />
      <CharacterCardSkeleton size='sm' />
      <CharacterCardSkeleton size='sm' />
      <CharacterCardSkeleton size='sm' />
      <CharacterCardSkeleton size='sm' />
      <CharacterCardSkeleton size='sm' />
    </div>
  );
};
