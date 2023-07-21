'use client';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { IconButton } from '@several-ui/icon-button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const isDarkMode = theme === 'dark';

  if (!isMounted) return <IconButton appearance='secondary' disabled size='md' />;

  return (
    <IconButton appearance='secondary' onClick={() => (isDarkMode ? setTheme('light') : setTheme('dark'))} size='md'>
      {isDarkMode ? <MoonIcon className='h-3 w-3' /> : <SunIcon className='h-3 w-3' />}
    </IconButton>
  );
};
