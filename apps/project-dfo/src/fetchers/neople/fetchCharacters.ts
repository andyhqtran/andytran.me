import { API_REVALIDATION } from '~/components/revalidate';
import { API_KEY, API_URL } from '~/constants/env';
import { type Server } from '~/fetchers/neople/fetchServers';

export type Character = {
  characterId: string;
  characterName: string;
  fame: number;
  level: number;
  jobGrowId: string;
  jobGrowName: string;
  jobName: string;
  serverId: 'cain' | 'siroco';
};

export type FetchCharactersParams = {
  characterName: string;
  jobId?: string;
  jobGrowId?: string;
  limit?: number;
  serverId: Server['serverId'] | 'all';
  wordType?: 'full' | 'match';
};

export type FetchCharactersResponse = Character[];

export const fetchCharacters = async (params: FetchCharactersParams): Promise<FetchCharactersResponse> => {
  const searchParams = new URLSearchParams(`apikey=${API_KEY}`);

  if (params.characterName) searchParams.append('characterName', params.characterName);

  if (params.jobId) searchParams.append('jobId', params.jobId);

  if (params.jobGrowId) searchParams.append('jobGrowId', params.jobGrowId);

  if (params.limit) searchParams.append('limit', params.limit.toString());

  if (params.wordType) searchParams.append('wordType', params.wordType);

  return await fetch(`${API_URL}/servers/${params.serverId}/characters?${searchParams.toString()}`, {
    next: {
      revalidate: API_REVALIDATION,
    },
  })
    .then((res) => res.json())
    .then((res) => res?.rows || []);
};
