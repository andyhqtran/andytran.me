'use client';
import { TooltipProvider } from '@several-ui/tooltip';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <TooltipProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </TooltipProvider>
    </RecoilRoot>
  );
};
