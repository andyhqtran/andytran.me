import 'focus-visible';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { ComponentType, HTMLProps } from 'react';

import { ToastProvider } from 'primitives/Toast';

const MyApp = ({
  Component,
  pageProps,
}: AppProps & { Component: { layout: ComponentType } }) => {
  const router = useRouter();
  const Layout =
    Component.layout ??
    ((props: HTMLProps<HTMLDivElement>) => <>{props.children}</>);

  return (
    <ToastProvider>
      <Layout {...pageProps}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ToastProvider>
  );
};

export default MyApp;
