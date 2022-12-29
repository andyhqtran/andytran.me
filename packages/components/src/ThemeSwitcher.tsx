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

  if (!isMounted) return null;

  return (
    <IconButton appearance='ghost' icon={isDark ? BiSun : BiMoon} onClick={() => setTheme(isDark ? 'light' : 'dark')} />
  );
};
