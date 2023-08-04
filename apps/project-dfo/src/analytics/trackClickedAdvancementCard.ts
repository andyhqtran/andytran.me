'use client';
import va from '@vercel/analytics';

export type TrackClickedAdvancementCardParams = {
  id: string;
};

export const trackClickedAdvancementCard = (params: TrackClickedAdvancementCardParams) => {
  return va.track('clicked_advancement_card', params);
};
