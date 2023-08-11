import { type ItemRarity } from '~/types/neople';

export type ItemRarityType = 'common' | 'uncommon' | 'rare' | 'unique' | 'legendary' | 'epic';

export const ITEM_RARITY: { [key in ItemRarity]: ItemRarityType } = {
  Common: 'common',
  Uncommon: 'uncommon',
  Rare: 'rare',
  Unique: 'unique',
  Legendary: 'legendary',
  Epic: 'epic',
};
