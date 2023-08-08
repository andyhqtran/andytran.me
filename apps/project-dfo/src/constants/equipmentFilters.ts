export type EquipmentFilterType =
  | 'weapon'
  | 'fusion-weapon'
  | 'secondary-weapon'
  | 'fusion-secondary-weapon'
  | 'shoulder'
  | 'fusion-shoulder'
  | 'top'
  | 'fusion-top'
  | 'bottom'
  | 'fusion-bottom'
  | 'belt'
  | 'fusion-belt'
  | 'shoes'
  | 'fusion-shoes'
  | 'bracelet'
  | 'fusion-bracelet'
  | 'necklace'
  | 'fusion-necklace'
  | 'ring'
  | 'fusion-ring'
  | 'sub-equipment'
  | 'fusion-sub-equipment'
  | 'earring'
  | 'fusion-earring'
  | 'magic-stone'
  | 'fusion-magic-stone';

export const EQUIPMENT_FILTERS: { id: EquipmentFilterType; label: string }[] = [
  {
    id: 'weapon',
    label: 'Weapon',
  },
  {
    id: 'fusion-weapon',
    label: 'Fusion Weapon',
  },
  {
    id: 'secondary-weapon',
    label: 'Secondary Weapon',
  },
  {
    id: 'fusion-secondary-weapon',
    label: 'Fusion Secondary Weapon',
  },
  {
    id: 'shoulder',
    label: 'Shoulder',
  },
  {
    id: 'fusion-shoulder',
    label: 'Fusion Shoulder',
  },
  {
    id: 'top',
    label: 'Top',
  },
];
