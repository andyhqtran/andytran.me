'use client';
import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchRankingsCharacters, FetchRankingsCharactersParams } from '~/fetchers/rankings/fetchRankingCharacters';
import { useFlags } from '~/flags/client';

export const RANKINGS_KEY = 'rankings';

export const getRankingsKey = (params: UseRankingsParams) => [RANKINGS_KEY, params];

export type UseRankingsParams = Omit<FetchRankingsCharactersParams, 'page'>;

export const useRankings = (params: UseRankingsParams) => {
  const { flags } = useFlags();

  const rankings = useInfiniteQuery(
    getRankingsKey(params),
    (context) => fetchRankingsCharacters({ page: context.pageParam, ...params }),
    {
      enabled: flags?.ranking,
      getNextPageParam: (lastPage) => (lastPage.total_pages > lastPage.page ? lastPage.page + 1 : undefined),
    },
  );

  return rankings;
};
