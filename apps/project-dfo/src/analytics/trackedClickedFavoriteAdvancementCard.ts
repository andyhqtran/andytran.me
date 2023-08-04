'use client';
import va from '@vercel/analytics';

export type TrackedClickedFavoriteAdvancementCardParams = {
  id: string;
};

export const trackedClickedFavoriteAdvancementCard = (params: TrackedClickedFavoriteAdvancementCardParams) => {
  return va.track('clicked_favorite_advancement_card', params);
};
