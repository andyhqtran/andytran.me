'use client';

import { IconButton } from '@several/primitives';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <IconButton
      appearance='ghost'
      icon={isMounted ? (isDark ? BiSun : BiMoon) : BiSun}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    />
  );
};
