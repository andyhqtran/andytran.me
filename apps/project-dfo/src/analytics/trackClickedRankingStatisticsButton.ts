'use client';
import va from '@vercel/analytics';

export const trackClickedRankingStatisticsButton = () => {
  return va.track('clicked_ranking_statistics_button');
};
