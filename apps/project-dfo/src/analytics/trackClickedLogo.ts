'use client';
import va from '@vercel/analytics';

export const trackedClickedLogo = () => {
  return va.track('clicked_logo');
};
