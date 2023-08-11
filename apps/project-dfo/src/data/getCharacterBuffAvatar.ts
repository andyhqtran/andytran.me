import { cache } from 'react';

import { fetchCharacterBuffAvatar } from '~/fetchers/fetchCharacterBuffAvatar';

export const revalidate = 3600;

export const getCharacterBuffAvatar = cache(fetchCharacterBuffAvatar);
