import { API_KEY, API_URL } from '~/constants/env';
import { Server } from '~/fetchers/fetchServers';

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
  serverId: Server['severId'];
  wordType?: 'full' | 'match';
};

export type FetchCharactersResponse = {
  rows: Character[];
};

export const fetchCharacters = async (params: FetchCharactersParams): Promise<FetchCharactersResponse> => {
  const searchParams = new URLSearchParams(`apikey=${API_KEY}`);

  if (params.characterName) searchParams.append('characterName', params.characterName);

  if (params.jobId) searchParams.append('jobId', params.jobId);

  if (params.jobGrowId) searchParams.append('jobGrowId', params.jobGrowId);

  if (params.limit) searchParams.append('limit', params.limit.toString());

  if (params.wordType) searchParams.append('wordType', params.wordType);

  return await fetch(`${API_URL}/${params.serverId}/characters?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  }).then((res) => res.json());
};
