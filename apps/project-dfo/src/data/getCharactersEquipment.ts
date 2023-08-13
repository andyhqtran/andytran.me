import { cache } from 'react';

import { API_REVALIDATION } from '~/components/revalidate';
import { fetchCharacterEquipment } from '~/fetchers/neople/fetchCharacterEquipment';

export const revalidate = API_REVALIDATION;

export const getCharacterEquipment = cache(fetchCharacterEquipment);
