import { API_KEY, API_URL } from '~/constants/env';
import { type Server } from '~/fetchers/neople/fetchServers';
import { type Character } from '~/fetchers/neople/fetchCharacters';
import { type Equipment } from '~/types/neople';

export type FetchCharacterEquipmentParams = {
  characterId: Character['characterId'];
  serverId: Server['serverId'];
};

export type FetchCharacterEquipmentResponse = Equipment[];

export const fetchCharacterEquipment = async (
  params: FetchCharacterEquipmentParams,
): Promise<FetchCharacterEquipmentResponse> => {
  const searchParams = new URLSearchParams(`apikey=${API_KEY}`);

  return await fetch(
    `${API_URL}/servers/${params.serverId}/characters/${params.characterId}/equip/equipment?${searchParams.toString()}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  )
    .then((res) => res.json())
    .then((res) => res.equipment);
};
