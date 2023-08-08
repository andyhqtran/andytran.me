'use client';
import useSWRInfinite, { SWRInfiniteConfiguration } from 'swr/infinite';

import { fetchPlayers, FetchPlayersParams, FetchPlayersResponse } from '~/fetchers/fetchPlayers';

export const PLAYERS_KEY = 'players';

export type GetPlayersKeyParams = Omit<FetchPlayersParams, 'page'> & {
  pageIndex: number;
  previousPageData: FetchPlayersResponse | null;
};

export type GetPlayersKeyReturn = [string, Omit<GetPlayersKeyParams, 'previousPageData'>];

export type GetPlayersKey = (params: GetPlayersKeyParams) => GetPlayersKeyReturn;

export const getPlayersKey: GetPlayersKey = ({ previousPageData, ...params }) => {
  /**
   * Disable the fetching when the user has reached the end of the page.
   */
  if (previousPageData?.results && !previousPageData?.results.length) return null;

  return [PLAYERS_KEY, params];
};

export type UsePlayersParams = Omit<FetchPlayersResponse, 'page'>;

export type UsePlayersOptions = SWRInfiniteConfiguration<FetchPlayersResponse> & {
  enabled?: boolean;
};

export const usePlayers = (params?: UsePlayersParams, options?: UsePlayersOptions) => {
  const { enabled = true, ...swrOptions }: UsePlayersOptions = options || {};
  const players = useSWRInfinite(
    enabled ? (pageIndex, previousPageData) => getPlayersKey({ pageIndex, previousPageData }) : null,
    (key: GetPlayersKeyReturn) => fetchPlayers({ page: key[1].pageIndex + 1 }),
    {
      initialSize: 1,
      revalidateFirstPage: false,
      ...swrOptions,
    },
  );

  return players;
};
