import { useTheme } from '@emotion/react';
import Head from 'next/head';
import Router from 'next/router';
import React, { Fragment } from 'react';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

/**
 * Tracks client-side page views with Segment
 */
Router.events.on('routeChangeComplete', (url) => {
  if (window.gtag) {
    window.gtag('config', process.env.GA_TRACKING_ID, {
      page_path: url,
    });
  }

  if (window.analytics) {
    window.analytics.page(url);
  }
});

export const Layout = ({
  children,
  description,
  icon,
  meta,
  navigation,
  nextPost,
  openGraph,
  post,
  prevPost,
  socialIcons,
  title,
  twitterCard,
}) => {
  const theme = useTheme();
  return (
    <Fragment>
      <Head>
        <title>{meta?.title ?? title}</title>
        <meta
          name='description'
          key='description'
          content={meta?.description ?? description}
        />
        <meta
          property='og:title'
          key='og:title'
          content={openGraph?.title ?? title}
        />
        {openGraph?.image && (
          <meta property='og:image' key='og:image' content={openGraph?.image} />
        )}
        <meta
          property='og:description'
          key='og:description'
          content={openGraph?.description ?? description}
        />
        <meta
          name='twitter:card'
          key='twitter:card'
          content='summary_large_image'
        />{' '}
        <meta
          name='twitter:description'
          key='twitter:description'
          content={
            twitterCard?.description ?? openGraph?.description ?? description
          }
        />
        {(twitterCard?.image || openGraph?.image) && (
          <meta
            name='twitter:image'
            key='twitter:image'
            content={twitterCard?.image ?? openGraph?.image}
          />
        )}
        <meta
          name='twitter:title'
          key='twitter:title'
          content={twitterCard?.title ?? openGraph?.title ?? title}
        />
        <meta
          name='theme-color'
          key='theme-color'
          content={theme.colors.primary}
        />
        <link rel='shortcut icon' href={icon} key='favicon' />
      </Head>
      <Header
        nextPost={nextPost}
        prevPost={prevPost}
        postTitle={post?.title}
        socialIcons={socialIcons}
        title={title}
      />
      {children}
      <Footer navigation={navigation} title={title} />
    </Fragment>
  );
};
