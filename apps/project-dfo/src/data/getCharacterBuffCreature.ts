import { cache } from 'react';

import { API_REVALIDATION } from '~/components/revalidate';
import { fetchCharacterBuffCreature } from '~/fetchers/neople/fetchCharacterBuffCreature';

export const revalidate = API_REVALIDATION;

export const getCharacterBuffCreature = cache(fetchCharacterBuffCreature);
