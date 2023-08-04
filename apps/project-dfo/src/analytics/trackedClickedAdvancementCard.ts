'use client';
import va from '@vercel/analytics';

export type TrackedClickedAdvancementCardParams = {
  id: string;
};

export const trackedClickedAdvancementCard = (params: TrackedClickedAdvancementCardParams) => {
  return va.track('clicked_advancement_card', params);
};
