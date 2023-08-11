import { cache } from 'react';

import { fetchCharactersEquipment } from '~/fetchers/fetchCharactersEquipment';

export const revalidate = 3600;

export const getCharactersEquipment = cache(fetchCharactersEquipment);
