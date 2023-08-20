'use client';
import { Spinner } from '@several-ui/spinner';
import { useMemo } from 'react';

import { CharacertInfiniteList } from '~/components/character/CharacterInfiniteList';
import { CharacterCard } from '~/components/CharacterCard';
import { RankingsCharacterListSkeleton } from '~/components/rankings/RankingsCharacterListSkeleton';
import { FetchRankingsCharactersResponse } from '~/fetchers/rankings/fetchRankingCharacters';
import { useFlags } from '~/flags/client';
import { useRankings } from '~/hooks/queries/useRankings';
import { Character } from '~/types/rankings';

export const RankingsCharacterList = ({ jobGrowId, jobId }) => {
  const { flags } = useFlags();
  const {
    data: characters,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isInitialLoading,
  } = useRankings(
    {
      limit: 100,
      jobId,
      jobGrowId,
      serverId: 'all',
    },
    {
      enabled: !!flags?.ranking,
    },
  );

  const characterRows = useMemo(() => {
    return characters ? characters.pages.flatMap((group) => group.results) : [];
  }, [characters]);

  if (isInitialLoading || !characters || !flags?.ranking) {
    return <RankingsCharacterListSkeleton />;
  }

  return (
    <CharacertInfiniteList<Character, FetchRankingsCharactersResponse>
      characters={characterRows}
      getEstimateSize={() => 80 + 16}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      onFetchNextPage={fetchNextPage}
      renderCharacter={({ character, index }) => (
        <CharacterCard
          className='mb-4'
          fame={character.fame}
          id={character.characterId}
          index={index + 1}
          label='Rank'
          name={character.characterName}
          serverId={character.serverId}
          size='sm'
        />
      )}
      renderLoaderRow={() => (
        <div className='flex w-full justify-center'>
          <Spinner className='text-blue-9' />
        </div>
      )}
    />
  );
};
