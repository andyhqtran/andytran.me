'use client';
import { TooltipProvider } from '@several-ui/tooltip';
import { ThemeProvider } from 'next-themes';
import { type ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <SWRConfig>
        <TooltipProvider>
          <ThemeProvider defaultTheme='dark'>{children}</ThemeProvider>
        </TooltipProvider>
      </SWRConfig>
    </RecoilRoot>
  );
};
