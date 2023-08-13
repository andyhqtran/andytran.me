import { cache } from 'react';

import { fetchCharacters } from '~/fetchers/neople/fetchCharacters';

export const revalidate = 3600;

export const getCharacters = cache(fetchCharacters);
