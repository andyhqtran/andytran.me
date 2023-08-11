import { cache } from 'react';

import { fetchItemInformation } from '~/fetchers/fetchItemInformation';

export const revalidate = 3600;

export const getItemInformation = cache(fetchItemInformation);
