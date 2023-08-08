import { PLAYERS_API_URL } from '~/constants/apiUrls';

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
  return await fetch(`${PLAYERS_API_URL}?page=${params.page}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
    },
  }).then((res) => res.json());
};
