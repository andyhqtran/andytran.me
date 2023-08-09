'use client';
import va from '@vercel/analytics';

export const trackedClickedDiscordButton = () => {
  return va.track('clicked_discord_button');
};
