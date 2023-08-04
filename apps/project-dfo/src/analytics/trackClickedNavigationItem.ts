'use client';
import va from '@vercel/analytics';

export type TrackClickedNavigationItemParams = {
  href: string;
  id: string;
  label: string;
};

export const trackClickedNavigationItem = (params: TrackClickedNavigationItemParams) => {
  return va.track('clicked_navigation_item', params);
};
