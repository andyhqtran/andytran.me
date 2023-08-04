'use client';
import va from '@vercel/analytics';

export type TrackedClickedThemeSwitcher = {
  currentTheme: string;
  newTheme: string;
};

export const trackedClickedThemeSwitcher = (params: TrackedClickedThemeSwitcher) => {
  return va.track('clicked_theme_switcher', params);
};
