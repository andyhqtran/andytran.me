import { cache } from 'react';

import { API_REVALIDATION } from '~/components/revalidate';
import { fetchCharacterBuffAvatar } from '~/fetchers/neople/fetchCharacterBuffAvatar';

export const revalidate = API_REVALIDATION;

export const getCharacterBuffAvatar = cache(fetchCharacterBuffAvatar);
