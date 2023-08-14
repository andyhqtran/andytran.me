import { API_REVALIDATION } from '~/components/revalidate';
import { API_KEY, API_URL } from '~/constants/env';
import { type Character } from '~/fetchers/neople/fetchCharacters';
import { type BuffAvatar, type Server } from '~/types/neople';

export type FetchCharacterBuffAvatarParams = {
  characterId: Character['characterId'];
  serverId: Server['serverId'];
};

export type FetchCharacterBuffAvatarResponse = BuffAvatar[];

export const fetchCharacterBuffAvatar = async (
  params: FetchCharacterBuffAvatarParams,
): Promise<FetchCharacterBuffAvatarResponse> => {
  const searchParams = new URLSearchParams(`apikey=${API_KEY}`);

  return await fetch(
    `${API_URL}/servers/${params.serverId}/characters/${
      params.characterId
    }/skill/buff/equip/avatar?${searchParams.toString()}`,
    {
      next: {
        revalidate: API_REVALIDATION,
      },
    },
  )
    .then((res) => res.json())
    .then((res) => res.skill.buff?.avatar || []);
};
