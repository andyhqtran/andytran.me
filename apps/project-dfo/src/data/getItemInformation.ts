import { cache } from 'react';

import { API_REVALIDATION } from '~/components/revalidate';
import { fetchItemInformation } from '~/fetchers/neople/fetchItemInformation';

export const revalidate = API_REVALIDATION;

export const getItemInformation = cache(fetchItemInformation);
