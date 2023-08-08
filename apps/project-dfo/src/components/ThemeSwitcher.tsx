'use client';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { IconButton } from '@several-ui/icon-button';
import { Tooltip } from '@several-ui/tooltip';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { trackClickedThemeSwitcher } from '~/analytics/trackClickedThemeSwitcher';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const isDarkMode = theme === 'dark';

  if (!isMounted) return <IconButton appearance='outline' color='slate' disabled size='sm' />;

  return (
    <Tooltip label={`Switch to ${isDarkMode ? 'Light' : 'Dark'} mode`}>
      <IconButton
        appearance='outline'
        color='slate'
        onClick={() => {
          setTheme(isDarkMode ? 'light' : 'dark');

          trackClickedThemeSwitcher({
            currentTheme: theme,
            newTheme: isDarkMode ? 'light' : 'dark',
          });
        }}
        size='sm'
      >
        {isDarkMode ? <SunIcon className='h-2 w-2' /> : <MoonIcon className='h-2 w-2' />}
      </IconButton>
    </Tooltip>
  );
};
