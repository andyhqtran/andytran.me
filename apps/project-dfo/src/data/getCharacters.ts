import { cache } from 'react';

import { API_KEY, API_URL } from '~/constants/env';
import { Server } from '~/fetchers/fetchServers';

export const revalidate = 3600;

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

export type GetCharactersParams = {
  characterName: string;
  jobId?: string;
  jobGrowId?: string;
  limit?: number;
  serverId: Server['severId'];
  wordType?: 'full' | 'match';
};

export type GetCharactersResponse = {
  rows: Character[];
};

export const getCharacters = cache(async (params: GetCharactersParams): Promise<GetCharactersResponse> => {
  const searchParams = new URLSearchParams(`apikey=${API_KEY}`);

  if (params.characterName) searchParams.append('characterName', params.characterName);

  if (params.jobId) searchParams.append('jobId', params.jobId);

  if (params.jobGrowId) searchParams.append('jobGrowId', params.jobGrowId);

  if (params.limit) searchParams.append('limit', params.limit.toString());

  if (params.wordType) searchParams.append('wordType', params.wordType);

  return await fetch(`${API_URL}/servers/${params.serverId}/characters?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  }).then((res) => res.json());
});
