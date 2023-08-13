import { cache } from 'react';

import { fetchJobs } from '~/fetchers/neople/fetchJobs';

export const revalidate = 3600;

export const getJobs = cache(fetchJobs);
