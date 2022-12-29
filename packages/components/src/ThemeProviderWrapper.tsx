'use client';

// import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

export type ThemeProviderWrapperProps = {
  children: ReactNode;
};

export const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
  return children;
  // return <ThemeProvider attribute='data-theme'>{children}</ThemeProvider>;
};
