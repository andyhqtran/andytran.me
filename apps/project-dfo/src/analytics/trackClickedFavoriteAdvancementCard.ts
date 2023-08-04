'use client';
import va from '@vercel/analytics';

export type TrackClickedFavoriteAdvancementCardParams = {
  id: string;
};

export const trackClickedFavoriteAdvancementCard = (params: TrackClickedFavoriteAdvancementCardParams) => {
  return va.track('clicked_favorite_advancement_card', params);
};
