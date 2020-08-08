import { CacheProvider, ThemeProvider } from '@emotion/react';
import { cache } from '@emotion/css';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

import { GlobalStyles } from 'components/GlobalStyles';
import { Inter } from 'components/Inter';
import { Layout } from 'components/Layout';
import { Normalize } from 'components/Normalize';
import { ToastProvider } from 'design-system/Toast';
import { common } from 'themes/common';
import { light } from 'themes/light';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <CacheProvider value={cache}>
      <ThemeProvider
        theme={{
          ...common,
          ...light,
          test: 'test',
        }}
      >
        <ToastProvider>
          <Normalize />
          <GlobalStyles />
          <Inter />
          <Layout
            navigation={pageProps.navigation}
            nextPost={pageProps.nextPost}
            postTitle={pageProps.post && pageProps.post.title}
            prevPost={pageProps.prevPost}
            socialIcons={pageProps.socialIcons}
            title={pageProps.title}
          >
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
