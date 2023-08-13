import { cache } from 'react';

import { API_REVALIDATION } from '~/components/revalidate';
import { fetchCharacterAvatar } from '~/fetchers/neople/fetchCharacterAvatar';

export const revalidate = API_REVALIDATION;

export const getCharacterAvatar = cache(fetchCharacterAvatar);
