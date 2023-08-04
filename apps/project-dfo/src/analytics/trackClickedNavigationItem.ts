'use client';
import va from '@vercel/analytics';

export type TrackedClickedNavigationItemParams = {
  href: string;
  id: string;
  label: string;
};

export const trackedClickedNavigationItem = (params: TrackedClickedNavigationItemParams) => {
  return va.track('clicked_navigation_item', params);
};
