export type Server = {
  serverId: 'cain' | 'siroco';
  serverName: string;
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
  status?: {
    name: string;
    value: number;
  }[];
};

export type Option = {
  buff?: number;
  damage?: number;
  explain: string;
  explainDetail: string;
};

/**
 * Equipment types
 */

export type BakalInfo = {
  options: Option[];
};

export type DimensionCloisterInfo = {
  options: Option[];
};

export type IspinsInfo = {
  options: Option[];
};

export type MachineRevolutionInfo = {
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

export type Equipment = Item & {
  amplificationName: string | null;
  bakalInfo?: BakalInfo;
  dimensionCloisterInfo?: DimensionCloisterInfo;
  enchant: Enchant;
  growInfo?: GrowInfo;
  ispinsInfo?: IspinsInfo;
  itemAvailableLevel: number;
  itemGradeName?: string;
  itemTypeId: string;
  itemType: string;
  itemTypeDetailId: string;
  itemTypeDetail: string;
  machineRevolutionInfo?: MachineRevolutionInfo;
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

export type BuffAvatar = Item & {
  cloneAvatarName: string | null;
  emblems?: Emblem[];
};
