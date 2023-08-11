import { cache } from 'react';

import { fetchCharacterEquipment } from '~/fetchers/fetchCharacterEquipment';

export const revalidate = 3600;

export const getCharacterEquipment = cache(fetchCharacterEquipment);
