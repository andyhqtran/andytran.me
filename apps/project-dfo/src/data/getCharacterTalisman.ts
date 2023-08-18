import { cache } from 'react';

import { API_REVALIDATION } from '~/components/revalidate';
import { fetchCharacterTalisman } from '~/fetchers/neople/fetchCharacterTalisman';

export const revalidate = API_REVALIDATION;

export const getCharacterTalisman = cache(fetchCharacterTalisman);
