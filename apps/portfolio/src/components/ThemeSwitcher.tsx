import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '~/components/primitives/Icon';
import { IconButton } from '~/components/primitives/IconButton';
import { VisuallyHidden } from '~/components/VisuallyHidden';

export const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <IconButton
      css={{ color: 'inherit' }}
      onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
      size='small'
    >
      <VisuallyHidden>
        Switch to {isDarkMode ? 'light' : 'dark'} mode
      </VisuallyHidden>
      {isDarkMode ? <MoonIcon size='small' /> : <SunIcon size='small' />}
    </IconButton>
  );
};
