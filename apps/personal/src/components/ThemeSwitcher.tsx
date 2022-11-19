'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

import { IconButton } from '~/components/IconButton';

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
