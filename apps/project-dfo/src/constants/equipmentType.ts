export type EquipmentType =
  | 'weapon'
  | 'secondary-weapon'
  | 'shoulder'
  | 'top'
  | 'bottom'
  | 'belt'
  | 'shoes'
  | 'necklace'
  | 'ring'
  | 'bracelet'
  | 'sub-equipment'
  | 'earring'
  | 'magic-stone'
  | 'fusion-weapon'
  | 'fusion-secondary-weapon'
  | 'fusion-shoulder'
  | 'fusion-top'
  | 'fusion-bottom'
  | 'fusion-belt'
  | 'fusion-shoes'
  | 'fusion-necklace'
  | 'fusion-ring'
  | 'fusion-bracelet'
  | 'fusion-sub-equipment'
  | 'fusion-earring'
  | 'fusion-magic-stone';

export type Equipment = {
  id: EquipmentType;
  label: string;
};

export const WEAPON_EQUIPMENT: Equipment[] = [
  {
    id: 'weapon',
    label: 'Weapon',
  },
  {
    id: 'secondary-weapon',
    label: 'Secondary Weapon',
  },
];

export const WEAPON_FUSION_EQUIPMENT: Equipment[] = [
  {
    id: 'fusion-weapon',
    label: 'Fusion Weapon',
  },
  {
    id: 'fusion-secondary-weapon',
    label: 'Fusion Secondary Weapon',
  },
];

export const ARMOR_EQUIPMENT: Equipment[] = [
  {
    id: 'shoulder',
    label: 'Shoulder',
  },
  {
    id: 'top',
    label: 'Top',
  },
  {
    id: 'bottom',
    label: 'Bottom',
  },
  {
    id: 'belt',
    label: 'Belt',
  },
  {
    id: 'shoes',
    label: 'Shoes',
  },
];

export const ARMOR_FUSION_EQUIPMENT: Equipment[] = [
  {
    id: 'fusion-shoulder',
    label: 'Fusion Shoulder',
  },
  {
    id: 'fusion-top',
    label: 'Fusion Top',
  },
  {
    id: 'fusion-bottom',
    label: 'Fusion Bottom',
  },
  {
    id: 'fusion-belt',
    label: 'Fusion Belt',
  },
  {
    id: 'fusion-shoes',
    label: 'Fusion Shoes',
  },
];

export const ACCESSORY_EQUIPMENT: Equipment[] = [
  {
    id: 'bracelet',
    label: 'Bracelet',
  },
  {
    id: 'necklace',
    label: 'Necklace',
  },
  {
    id: 'ring',
    label: 'Ring',
  },
];

export const ACCESSORY_FUSION_EQUIPMENT: Equipment[] = [
  {
    id: 'fusion-bracelet',
    label: 'Fusion Bracelet',
  },
  {
    id: 'fusion-necklace',
    label: 'Fusion Necklace',
  },
  {
    id: 'fusion-ring',
    label: 'Fusion Ring',
  },
];

export const SPECIAL_EQUIPMENT: Equipment[] = [
  {
    id: 'sub-equipment',
    label: 'Sub Equipment',
  },
  {
    id: 'earring',
    label: 'Earring',
  },
  {
    id: 'magic-stone',
    label: 'Magicstone',
  },
];

export const SPECIAL_FUSION_EQUIPMENT: Equipment[] = [
  {
    id: 'fusion-sub-equipment',
    label: 'Fusion Sub Equipment',
  },
  {
    id: 'fusion-earring',
    label: 'Fusion Earring',
  },
  {
    id: 'fusion-magic-stone',
    label: 'Fusion Magicstone',
  },
];
