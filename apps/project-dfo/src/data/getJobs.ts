import { cache } from 'react';

import { API_REVALIDATION } from '~/components/revalidate';
import { fetchJobs } from '~/fetchers/neople/fetchJobs';

export const revalidate = API_REVALIDATION;

export const getJobs = cache(fetchJobs);
