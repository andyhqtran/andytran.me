import { API_KEY, API_URL } from '~/constants/env';
import { type Character } from '~/fetchers/fetchCharacters';
import { type Server } from '~/fetchers/fetchServers';
import { type Avatar } from '~/types/neople';

export type FetchCharacterAvatarParams = {
  characterId: Character['characterId'];
  serverId: Server['serverId'];
};

export type FetchCharacterAvatarResponse = Avatar[];

export const fetchCharacterAvatar = async (
  params: FetchCharacterAvatarParams,
): Promise<FetchCharacterAvatarResponse> => {
  const searchParams = new URLSearchParams(`apikey=${API_KEY}`);

  return await fetch(
    `${API_URL}/servers/${params.serverId}/characters/${params.characterId}/equip/avatar?${searchParams.toString()}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  )
    .then((res) => res.json())
    .then((res) => res.avatar || []);
};
