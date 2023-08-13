import { API_KEY, API_URL } from '~/constants/env';
import { Server } from '~/fetchers/neople/fetchServers';
import { type Character } from '~/fetchers/neople/fetchCharacters';

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
        revalidate: 3600,
      },
    },
  )
    .then((res) => res.json())
    .then((res) => res.skill.buff?.creature || []);
};
