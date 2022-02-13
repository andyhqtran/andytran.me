import 'focus-visible';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import React, { ComponentType, HTMLProps } from 'react';

import { ToastProvider } from 'primitives/Toast';
import { darkTheme } from '~/stitches.config';

const MyApp = ({
  Component,
  pageProps,
}: AppProps & { Component: { layout: ComponentType } }) => {
  const router = useRouter();
  const Layout =
    Component.layout ??
    ((props: HTMLProps<HTMLDivElement>) => <>{props.children}</>);

  return (
    <ThemeProvider
      attribute='class'
      disableTransitionOnChange={false}
      value={{ dark: darkTheme, light: 'light-theme' }}
    >
      <ToastProvider>
        <Layout {...pageProps}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default MyApp;
