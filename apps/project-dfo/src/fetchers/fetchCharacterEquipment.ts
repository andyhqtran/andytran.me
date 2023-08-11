import { API_KEY, API_URL } from '~/constants/env';
import { type Character } from '~/fetchers/fetchCharacters';
import { type Server } from '~/fetchers/fetchServers';

export type BakalInfo = {
  options: {
    buff?: number;
    damage?: number;
    explain: string;
    explainDetail: string;
  }[];
};

export type DimensionCloisterInfo = {
  options: {
    buff?: number;
    damage?: number;
    explain: string;
    explainDetail: string;
  }[];
};

export type IspinsInfo = {
  options: {
    buff?: number;
    damage?: number;
    explain: string;
    explainDetail: string;
  }[];
};

export type MachineRevolutionInfo = {
  options: {
    buff?: number;
    damage?: number;
    explain: string;
    explainDetail: string;
  }[];
};

export type Enchant = {
  explain?: string;
  status?: {
    name: string;
    value: number;
  }[];
};

export type UpgradeInfo = {
  itemId: string;
  itemName: string;
};

export type GrowInfo = {
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
    buff?: number;
  }[];
  engraveName?: boolean;
};

export type CharacterEquipment = {
  amplificationName: string | null;
  bakalInfo?: BakalInfo;
  dimensionCloisterInfo?: DimensionCloisterInfo;
  enchant: Enchant;
  growInfo?: GrowInfo;
  ispinsInfo?: IspinsInfo;
  itemAvailableLevel: number;
  itemGradeName?: string;
  itemId: string;
  itemName: string;
  itemRarity: number;
  itemTypeId: string;
  itemType: string;
  itemTypeDetailId: string;
  itemTypeDetail: string;
  machineRevolutionInfo?: MachineRevolutionInfo;
  refine: number;
  reinforce: number;
  setItemId: string | null;
  setItemName: string | null;
  slotId: string;
  slotName: string;
  upgradeInfo?: UpgradeInfo;
};

export type FetchCharacterEquipmentParams = {
  characterId: Character['characterId'];
  serverId: Server['serverId'];
};

export type FetchCharacterEquipmentResponse = CharacterEquipment[];

export const fetchCharacterEquipment = async (params: FetchCharacterEquipmentParams) => {
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
