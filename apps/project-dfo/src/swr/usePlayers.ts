'use client';
import useSWRInfinite, { SWRInfiniteConfiguration } from 'swr/infinite';

import {
  fetchRankingsCharacters,
  type FetchRankingsCharactersParams,
  type FetchRankingsCharactersResponse,
} from '~/fetchers/rankings/fetchRankingCharacters';

export const RANKINGS_CHARACTERS_KEY = 'RANKINGS_CHARACTERS';

export type GetPlayersKeyParams = Partial<Omit<FetchRankingsCharactersParams, 'page'>> & {
  pageIndex: number;
  previousPageData: FetchRankingsCharactersResponse | null;
};

export type GetPlayersKeyReturn = [string, Omit<GetPlayersKeyParams, 'previousPageData'>] | null;

export type GetPlayersKey = (params: GetPlayersKeyParams) => GetPlayersKeyReturn;

export const getPlayersKey: GetPlayersKey = ({ previousPageData, ...params }) => {
  /**
   * Disable the fetching when the user has reached the end of the page.
   */
  if (previousPageData?.results && !previousPageData?.results.length) return null;

  return [RANKINGS_CHARACTERS_KEY, params];
};

export type UsePlayersParams = Omit<FetchRankingsCharactersParams, 'page'>;

export type UsePlayersOptions = SWRInfiniteConfiguration<FetchRankingsCharactersResponse> & {
  enabled?: boolean;
};

export const usePlayers = (params?: UsePlayersParams, options?: UsePlayersOptions) => {
  const { enabled = true, ...swrOptions }: UsePlayersOptions = options || {};
  const players = useSWRInfinite(
    enabled ? (pageIndex, previousPageData) => getPlayersKey({ pageIndex, previousPageData }) : null,
    (key: GetPlayersKeyReturn) => fetchRankingsCharacters({ ...params, page: key[1].pageIndex + 1 }),
    {
      initialSize: 1,
      revalidateFirstPage: false,
      ...swrOptions,
    },
  );

  return players;
};
