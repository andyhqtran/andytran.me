import { API_REVALIDATION } from '~/components/revalidate';
import { API_KEY, API_URL } from '~/constants/env';

export type ItemInformation = {
  hashtag: string[];
  growInfo?: {
    total: {
      buff: number;
      damage: number;
      level: number;
      options: {
        buff: number;
        damage: number;
        explain: string;
        explainDetail: string;
        expRate: number;
        level: number;
      }[];
    };
  };
  itemAvailableLevel: number;
  itemBuff?: {
    explain: string;
    explainDetail: string;
    reinforceSkill: unknown[];
  };
  itemExplain: string;
  itemExplainDetail: string;
  itemFlavorText?: string;
  itemId: string;
  itemName: string;
  itemRarity: string;
  itemStatus?: {
    name: string;
    value: string;
  }[];
  itemType: string;
  itemTypeDetail: string;
  itemTypeDetailId: string;
  itemTypeId: string;
  obtainInfo?: {
    dungeon: unknown;
    shop: {
      type: string;
    }[];
  };
  setItemId: string | null;
  setItemName: string | null;
};

export type FetchItemInformationParams = {
  itemId: string;
};

export type FetchItemInformationResponse = ItemInformation;

export const fetchItemInformation = async (
  params: FetchItemInformationParams,
): Promise<FetchItemInformationResponse> => {
  const searchParams = new URLSearchParams(`apikey=${API_KEY}`);

  return await fetch(`${API_URL}/items/${params.itemId}?${searchParams.toString()}`, {
    next: {
      revalidate: API_REVALIDATION,
    },
  }).then((res) => res.json());
};
