import { type RuneType } from '~/types/neople';

export const getRuneTextColor = (runeType: RuneType | string) => {
  if (runeType === 'Ancient Library' || runeType.includes('Ancient Library')) return 'text-orange-11';

  if (runeType === 'Circle Mage' || runeType.includes('Circle Mage')) return 'text-green-11';

  if (runeType === 'Second Pact' || runeType.includes('Second Pact')) return 'text-red-11';

  if (runeType === 'Terra Cotta' || runeType.includes('Terra Cotta')) return 'text-purple-11';

  if (runeType === 'The Guardians' || runeType.includes('The Guardians')) return 'text-blue-11';

  return 'text-slate-11';
};

export const getRuneBorderColor = (runeType: RuneType | string) => {
  if (runeType === 'Ancient Library' || runeType.includes('Ancient Library')) return 'border-orange-9 bg-orange-2';

  if (runeType === 'Circle Mage' || runeType.includes('Circle Mage')) return 'border-green-9 bg-green-2';

  if (runeType === 'Second Pact' || runeType.includes('Second Pact')) return 'border-red-9 bg-red-2';

  if (runeType === 'Terra Cotta' || runeType.includes('Terra Cotta')) return 'border-purple-9 bg-purple-2';

  if (runeType === 'The Guardians' || runeType.includes('The Guardians')) return 'border-blue-9 bg-blue-2';

  return 'border-slate-9 bg-slate-2';
};
