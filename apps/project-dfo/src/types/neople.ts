export type Server = {
  serverId: 'cain' | 'siroco';
  serverName: string;
};

export type Job = {
  jobId: string;
  jobExplain?: string;
  jobName: string;
  jobSlug: string;
  jobGrow: JobGrow[];
};

export type JobGrow = {
  jobGrowId: string;
  jobGrowImageSlug: string;
  jobGrowName: string;
  jobGrowSlug: string;
};

/**
 * Generic types
 */
export type ItemRarity = 'Common' | 'Uncommon' | 'Rare' | 'Unique' | 'Legendary' | 'Epic';

export type Item = {
  itemId: string;
  itemName: string;
  itemRarity: ItemRarity;
  slotId: string;
  slotName: string;
};

export type Emblem = {
  itemName: string;
  itemRarity: ItemRarity;
  slotColor: string;
  slotNo: number;
};

export type Enchant = {
  explain?: string;
  status?: EnchantStatus[];
};

export type EnchantStatus = {
  name: string;
  value: string | number;
};

export type Option = {
  buff?: number;
  damage?: number;
  explain: string;
  explainDetail: string;
};

/**
 * Creature
 */
export type Artifact = Pick<Item, 'itemId' | 'itemName' | 'itemRarity'> & {
  itemAvailableLevel: number;
  slotColor: 'BLUE' | 'GREEN' | 'RED';
};

export type Creature = Pick<Item, 'itemId' | 'itemName' | 'itemRarity'> & {
  artifact?: Artifact[];
  clone?: Pick<Item, 'itemId' | 'itemName'>;
};

/**
 * Insignia
 */
export type Gem = Pick<Item, 'itemId' | 'itemName' | 'itemRarity'> & {
  itemAbility: string;
  slotNo: number;
};

export type Insignia = Pick<Item, 'itemId' | 'itemName' | 'itemRarity'> & {
  gems?: Gem[];
  itemAbility: string;
  itemAvailableLevel: number;
  reinforce: number;
};

/**
 * Talisman
 */
export type RuneType = 'Ancient Library' | 'Circle Mage' | 'Second Pact' | 'The Guardians' | 'Terra Cotta';

export type Rune = Pick<Item, 'itemId' | 'itemName'> & {
  slotNo: number;
};

export type Talisman = {
  talisman: Pick<Item, 'itemId' | 'itemName'> & {
    runeTypes: [RuneType, RuneType, RuneType];
    slotNo: number;
  };
  runes?: Rune[];
};

/**
 * Equipment types
 */
export type FusionOptionInfo = {
  options: Option[];
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
  options: (Option & {
    default: {
      damage: number;
      buff: number;
    };
    expRate: number;
    level: number;
  })[];
  engraveName?: boolean;
};

export type Equipment = Item & {
  amplificationName: string | null;
  bakalInfo?: FusionOptionInfo;
  dimensionCloisterInfo?: FusionOptionInfo;
  enchant: Enchant;
  growInfo?: GrowInfo;
  ispinsInfo?: FusionOptionInfo;
  itemAvailableLevel: number;
  itemGradeName?: string;
  itemTypeId: string;
  itemType: string;
  itemTypeDetailId: string;
  itemTypeDetail: string;
  machineRevolutionInfo?: FusionOptionInfo;
  refine: number;
  reinforce: number;
  setItemId: string | null;
  setItemName: string | null;
  upgradeInfo?: UpgradeInfo;
};

export type Clone = Pick<Item, 'itemId' | 'itemName'>;

export type Avatar = Item & {
  clone?: Clone;
  emblems: Emblem[];
  optionAbility: string;
};

export type BuffAvatar = Avatar & {
  cloneAvatarName: string | null;
};
