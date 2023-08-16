'use client';
import { Spinner } from '@several-ui/spinner';
import { useMemo } from 'react';

import { CharacertInfiniteList } from '~/components/character/CharacterInfiniteList';
import { CharacterCard } from '~/components/CharacterCard';
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
  } = useRankings({
    limit: 100,
    jobId,
    jobGrowId,
    serverId: 'all',
  });

  const characterRows = useMemo(() => {
    return characters ? characters.pages.flatMap((group) => group.results) : [];
  }, [characters]);

  if (!characterRows?.length || !flags?.ranking) return null;

  return (
    <CharacertInfiniteList<Character, FetchRankingsCharactersResponse>
      characters={characterRows}
      getEstimateSize={() => 96 + 16}
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
