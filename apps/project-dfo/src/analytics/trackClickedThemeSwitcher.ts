'use client';
import va from '@vercel/analytics';

export type TrackClickedThemeSwitcher = {
  currentTheme?: string;
  newTheme: string;
};

export const trackClickedThemeSwitcher = (params: TrackClickedThemeSwitcher) => {
  return va.track('clicked_theme_switcher', params);
};
