import { API_REVALIDATION } from '~/components/revalidate';
import { API_KEY, API_URL } from '~/constants/env';
import { type Character } from '~/fetchers/neople/fetchCharacters';
import { Server } from '~/fetchers/neople/fetchServers';

export type BuffCreature = {
  itemId: string;
  itemName: string;
  itemRarity: string;
  enchant: unknown;
};

export type FetchCharacterBuffCreatureParams = {
  characterId: Character['characterId'];
  serverId: Server['serverId'];
};

export type FetchCharacterBuffCreatureResponse = BuffCreature[];

export const fetchCharacterBuffCreature = async (params: FetchCharacterBuffCreatureParams) => {
  const searchParams = new URLSearchParams(`apikey=${API_KEY}`);

  return await fetch(
    `${API_URL}/servers/${params.serverId}/characters/${
      params.characterId
    }/skill/buff/equip/creature?${searchParams.toString()}`,
    {
      next: {
        revalidate: API_REVALIDATION,
      },
    },
  )
    .then((res) => res.json())
    .then((res) => res.skill.buff?.creature || []);
};
