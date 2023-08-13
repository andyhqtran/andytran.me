import { RANKINGS_API_URL } from '~/constants/env';
import { type Character, type Server } from '~/types/rankings';

export type FetchRankingsCharactersParams = {
  jobId: string;
  jobGrowId: string;
  page: number;
  limit?: number;
  serverId: Server;
};

export type FetchRankingsCharactersResponse = {
  page: number;
  results: Character[];
  total_pages: number;
  total_results: number;
};

export const fetchRankingsCharacters = async (
  params: FetchRankingsCharactersParams,
): Promise<FetchRankingsCharactersResponse> => {
  const searchParams = new URLSearchParams();

  if (params.jobId) searchParams.append('jobId', params.jobId);

  if (params.jobGrowId) searchParams.append('jobGrowId', params.jobGrowId);

  if (params.page) searchParams.append('page', params.page.toString());

  if (params.limit) searchParams.append('limit', params.limit.toString());

  return await fetch(`${RANKINGS_API_URL}/characters/?${searchParams.toString()}`, {
    next: {
      revalidate: 3600,
    },
  }).then((res) => res.json());
};
