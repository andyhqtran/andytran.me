'use client';
import va from '@vercel/analytics';

import { type Equipment } from '~/types/neople';

export type TrackedClickedCharacterEquipmentRowParams = Partial<
  Pick<Equipment, 'itemId' | 'itemName' | 'itemRarity' | 'itemType'>
>;

export const trackedClickedCharacterEquipmentRow = (params: TrackedClickedCharacterEquipmentRowParams) => {
  return va.track('clicked_character_equipment_row', params);
};
