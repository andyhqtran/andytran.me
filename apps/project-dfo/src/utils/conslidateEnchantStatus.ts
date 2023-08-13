import { type EnchantStatus } from '~/types/neople';

export const conslidateEnchantStatus = (enchantStatus: EnchantStatus[]): EnchantStatus[] => {
  const groupedStats: { [key: string]: EnchantStatus } = {};

  enchantStatus.forEach((status) => {
    let groupName = status.name;

    if (['Strength', 'Intelligence', 'Vitality', 'Spirit'].includes(status.name)) {
      const allStats = ['Strength', 'Intelligence', 'Vitality', 'Spirit'];
      if (allStats.every((stat) => enchantStatus.some((s) => s.name === stat && s.value === status.value))) {
        groupName = 'All Stats';
      }
    } else if (['Physical Atk.', 'Magical Atk.', 'Independent Atk.'].includes(status.name)) {
      const allAtk = ['Physical Atk.', 'Magical Atk.', 'Independent Atk.'];
      if (allAtk.every((atk) => enchantStatus.some((s) => s.name === atk && s.value === status.value))) {
        groupName = 'Atk.';
      }
    } else if (['Physical Critical Chance', 'Magical Critical Chance'].includes(status.name)) {
      const allCritChance = ['Physical Critical Chance', 'Magical Critical Chance'];
      if (allCritChance.every((crit) => enchantStatus.some((s) => s.name === crit && s.value === status.value))) {
        groupName = 'All Critical Chance';
      }
    }

    if (!groupedStats[groupName]) {
      groupedStats[groupName] = {
        name: groupName,
        value: status.value,
      };
    }
  });

  return Object.values(groupedStats);
};
