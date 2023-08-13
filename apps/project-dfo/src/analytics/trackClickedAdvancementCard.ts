'use client';
import va from '@vercel/analytics';

export type TrackClickedRankingAdvancementCardParams = {
  id: string;
};

export const trackClickedRankingAdvancementCard = (params: TrackClickedRankingAdvancementCardParams) => {
  return va.track('clicked_ranking_advancement_card', params);
};
