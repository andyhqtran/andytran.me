import 'focus-visible';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { cache } from '@emotion/css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { ComponentType, HTMLProps } from 'react';

import { GlobalStyles } from 'components/GlobalStyles';
import { Inter } from 'components/Inter';
import { Normalize } from 'components/Normalize';
import { theme } from 'constants/theme';
import { ToastProvider } from 'primitives/Toast';
import { dark } from 'themes/dark';

const MyApp = ({
  Component,
  pageProps,
}: AppProps & { Component: { layout: ComponentType } }) => {
  const router = useRouter();
  const Layout =
    Component.layout ??
    ((props: HTMLProps<HTMLDivElement>) => <>{props.children}</>);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider
        theme={{
          ...theme,
          ...dark,
        }}
      >
        <ToastProvider>
          <Normalize />
          <GlobalStyles />
          <Inter />
          <Layout {...pageProps}>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </ToastProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
