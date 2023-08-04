'use client';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { IconButton } from '@several-ui/icon-button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { trackedClickedThemeSwitcher } from '~/analytics/trackClickedThemeSwitcher';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const isDarkMode = theme === 'dark';

  if (!isMounted) return <IconButton appearance='outline' color='slate' disabled size='md' />;

  return (
    <IconButton
      appearance='outline'
      color='slate'
      onClick={() => {
        setTheme(isDarkMode ? 'light' : 'dark');

        trackedClickedThemeSwitcher({
          currentTheme: theme,
          newTheme: isDarkMode ? 'light' : 'dark',
        });
      }}
      size='md'
    >
      {isDarkMode ? <MoonIcon className='h-3 w-3' /> : <SunIcon className='h-3 w-3' />}
    </IconButton>
  );
};
