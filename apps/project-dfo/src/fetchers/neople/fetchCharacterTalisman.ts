import { API_REVALIDATION } from '~/components/revalidate';
import { API_KEY, API_URL } from '~/constants/env';
import { type Character } from '~/fetchers/neople/fetchCharacters';
import { type Server } from '~/fetchers/neople/fetchServers';
import { type Talisman } from '~/types/neople';

export type FetchCharacterTalismanParams = {
  characterId: Character['characterId'];
  serverId: Server['serverId'];
};

export type FetchCharacterTalismanResponse = Talisman[];

export const fetchCharacterTalisman = async (
  params: FetchCharacterTalismanParams,
): Promise<FetchCharacterTalismanResponse> => {
  const searchParams = new URLSearchParams(`apikey=${API_KEY}`);

  return await fetch(
    `${API_URL}/servers/${params.serverId}/characters/${params.characterId}/equip/talisman?${searchParams.toString()}`,
    {
      next: {
        revalidate: API_REVALIDATION,
      },
    },
  )
    .then((res) => res.json())
    .then((res) => res.talismans || []);
};
