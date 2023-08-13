import { RANKINGS_API_URL } from '~/constants/env';

export type Player = {
  id: string;
};

export type FetchPlayersParams = {
  page: number;
  sort?: 'asc' | 'desc';
};

export type FetchPlayersResponse = {
  page: number;
  results: Player[];
  total_pages: number;
  total_results: number;
};

export const fetchPlayers = async (params: FetchPlayersParams): Promise<FetchPlayersResponse> => {
  return await fetch(`${RANKINGS_API_URL}/characters?page=${params.page}`).then((res) => res.json());
};
