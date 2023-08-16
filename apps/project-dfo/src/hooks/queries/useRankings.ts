'use client';
import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchRankingsCharacters, FetchRankingsCharactersParams } from '~/fetchers/rankings/fetchRankingCharacters';

export const RANKINGS_KEY = 'rankings';

export const getRankingsKey = (params: UseRankingsParams) => [RANKINGS_KEY, params];

export type UseRankingsParams = Omit<FetchRankingsCharactersParams, 'page'>;

export type UseRankingsOptions = {
  enabled?: boolean;
};

export const useRankings = (params: UseRankingsParams, options: UseRankingsOptions) => {
  const rankings = useInfiniteQuery(
    getRankingsKey(params),
    (context) => fetchRankingsCharacters({ page: context.pageParam, ...params }),
    {
      ...options,
      getNextPageParam: (lastPage) => (lastPage.total_pages > lastPage.page ? lastPage.page + 1 : undefined),
    },
  );

  return rankings;
};
