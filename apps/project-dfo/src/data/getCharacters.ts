import { cache } from 'react';

import { API_REVALIDATION } from '~/components/revalidate';
import { fetchCharacters } from '~/fetchers/neople/fetchCharacters';

export const revalidate = API_REVALIDATION;

export const getCharacters = cache(fetchCharacters);
