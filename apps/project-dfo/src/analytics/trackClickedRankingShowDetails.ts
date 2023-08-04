'use client';
import va from '@vercel/analytics';

export type TrackClickedRankingShowDetailsParams = {
  showDetails: boolean;
};

export const trackClickedRankingDetailsButton = (params: TrackClickedRankingShowDetailsParams) => {
  return va.track('clicked_ranking_details_button', params);
};
