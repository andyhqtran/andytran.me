import type { Configuration } from '@happykit/flags/config';

export type AppFlags = {
  database: boolean;
  ranking: boolean;
  rankingFavorites: boolean;
  statistics: boolean;
};

export const config: Configuration<AppFlags> = {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  envKey: process.env.NEXT_PUBLIC_FLAGS_ENV_KEY!,
  defaultFlags: {
    database: false,
    ranking: false,
    rankingFavorites: false,
    statistics: false,
  },
};
