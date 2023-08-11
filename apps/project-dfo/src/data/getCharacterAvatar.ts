import { cache } from 'react';

import { fetchCharacterAvatar } from '~/fetchers/fetchCharacterAvatar';

export const revalidate = 3600;

export const getCharacterAvatar = cache(fetchCharacterAvatar);
