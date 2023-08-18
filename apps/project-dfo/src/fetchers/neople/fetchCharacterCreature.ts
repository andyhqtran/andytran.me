import { API_REVALIDATION } from '~/components/revalidate';
import { API_KEY, API_URL } from '~/constants/env';
import { type Character } from '~/fetchers/neople/fetchCharacters';
import { type Server } from '~/fetchers/neople/fetchServers';
import { type Creature } from '~/types/neople';

export type FetchCharacterCreatureParams = {
  characterId: Character['characterId'];
  serverId: Server['serverId'];
};

export type FetchCharacterCreatureResponse = Creature;

export const fetchCharacterCreature = async (
  params: FetchCharacterCreatureParams,
): Promise<FetchCharacterCreatureResponse> => {
  const searchParams = new URLSearchParams(`apikey=${API_KEY}`);

  return await fetch(
    `${API_URL}/servers/${params.serverId}/characters/${params.characterId}/equip/creature?${searchParams.toString()}`,
    {
      next: {
        revalidate: API_REVALIDATION,
      },
    },
  )
    .then((res) => res.json())
    .then((res) => res.creature);
};
