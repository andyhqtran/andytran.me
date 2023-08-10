'use client';
import va from '@vercel/analytics';

export type TrackClickedCharacterSearchButtonParams = {
  name: string;
};

export const trackClickedCharacterSearchButton = (params: TrackClickedCharacterSearchButtonParams) => {
  return va.track('clicked_character_search_button', params);
};
