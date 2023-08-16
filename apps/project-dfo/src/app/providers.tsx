'use client';
import { TooltipProvider } from '@several-ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { type ReactNode } from 'react';
import { SWRConfig } from 'swr';

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SWRConfig>
        <TooltipProvider>
          <ThemeProvider defaultTheme='dark'>{children}</ThemeProvider>
        </TooltipProvider>
      </SWRConfig>
    </QueryClientProvider>
  );
};
