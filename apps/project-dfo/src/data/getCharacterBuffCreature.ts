import { cache } from 'react';

import { fetchCharacterBuffCreature } from '~/fetchers/fetchCharacterBuffCreature';

export const revalidate = 3600;

export const getCharacterBuffCreature = cache(fetchCharacterBuffCreature);
