import { API_KEY, API_URL } from '~/constants/env';
import { type Character } from '~/fetchers/fetchCharacters';
import { Server } from '~/fetchers/fetchServers';

export type BuffAvatar = {
  cloneAvatarName: string | null;
  emblems: {
    itemName: string;
    itemRarity: string;
    slotColor: string;
    slotNo: number;
  }[];
  itemId: string;
  itemName: string;
  itemRarity: string;
  slotId: string;
  slotName: string;
};

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
        revalidate: 3600,
      },
    },
  )
    .then((res) => res.json())
    .then((res) => res.skill.buff?.avatar || []);
};
