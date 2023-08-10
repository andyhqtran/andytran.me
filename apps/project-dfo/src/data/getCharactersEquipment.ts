import { cache } from 'react';

import { API_KEY, API_URL } from '~/constants/env';
import { Character } from '~/data/getCharacters';
import { Server } from '~/fetchers/fetchServers';

export type CharacterEquipment = {
  slotId: string;
  slotName: string;
  itemId: string;
  itemName: string;
  itemTypeId: string;
  itemType: string;
  itemTypeDetailId: string;
  itemTypeDetail: string;
  itemAvailableLevel: number;
  itemRarity: number;
  setItemId: string | null;
  setItemName: string | null;
  reinforce: number;
  itemGradeName?: string;
  amplificationName: string | null;
  refine: number;
  enchant?: {
    explain?: string;
    status: {
      name: string;
      value: number;
    }[];
  };
  bakalInfo?: {
    options: {
      buff: number;
      explain: string;
      explainDetail: string;
    }[];
  };
  machineRevolutionInfo?: {
    options: {
      damage?: number;
      buff: number;
      explain: string;
      explainDetail: string;
    }[];
  };
  ispinsInfo?: {
    options: {
      damage?: number;
      buff: number;
      explain: string;
      explainDetail: string;
    }[];
  };
  upgradeInfo?: {
    itemId: string;
    itemName: string;
  };
  growInfo?: {
    total: {
      damage: number;
      buff: number;
      level: number;
    };
    options: {
      level: number;
      expRate: number;
      explain: string;
      explainDetail: string;
      default: {
        damage: number;
        buff: number;
      };
      damage: number;
      buff: number;
    }[];
    engraveName?: boolean;
  };
};

export type GetCharactersEquipmentParams = {
  characterId: Character['characterId'];
  serverId: Server['severId'];
};

export type GetCharactersEquipmentResponse = CharacterEquipment[];

export const getCharactersEquipment = cache(async (params): Promise<GetCharactersEquipmentResponse> => {
  const searchParams = new URLSearchParams(`apikey=${API_KEY}`);

  return await fetch(
    `${API_URL}/servers/${params.serverId}/characters/${params.characterId}/equip/equipment?${searchParams.toString()}`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    },
  )
    .then((res) => res.json())
    .then((res) => res.equipment);
});
