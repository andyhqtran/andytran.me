import { darkTheme } from '@andyhqtran/components';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import React, { ComponentType, HTMLProps } from 'react';

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
      <Layout {...pageProps}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
