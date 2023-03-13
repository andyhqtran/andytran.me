'use client';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

export type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider(props: ThemeProviderProps) {
  return <NextThemeProvider defaultTheme='system' {...props} />;
}
