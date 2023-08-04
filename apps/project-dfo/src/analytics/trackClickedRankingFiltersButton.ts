'use client';
import va from '@vercel/analytics';

export const trackClickedRankingFiltersButton = () => {
  return va.track('clicked_ranking_filters_button');
};
