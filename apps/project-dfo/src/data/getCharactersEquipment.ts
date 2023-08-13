import { cache } from 'react';

import { fetchCharacterEquipment } from '~/fetchers/neople/fetchCharacterEquipment';

export const revalidate = 3600;

export const getCharacterEquipment = cache(fetchCharacterEquipment);
