import { cache } from 'react';

import { API_REVALIDATION } from '~/components/revalidate';
import { fetchCharacterCreature } from '~/fetchers/neople/fetchCharacterCreature';

export const revalidate = API_REVALIDATION;

export const getCharacterCreature = cache(fetchCharacterCreature);
