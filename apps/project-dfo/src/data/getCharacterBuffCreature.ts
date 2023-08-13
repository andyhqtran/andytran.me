import { cache } from 'react';

import { fetchCharacterBuffCreature } from '~/fetchers/neople/fetchCharacterBuffCreature';

export const revalidate = 3600;

export const getCharacterBuffCreature = cache(fetchCharacterBuffCreature);
