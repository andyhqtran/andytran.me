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
  navigation,
  nextPost,
  postTitle,
  prevPost,
  socialIcons,
  title,
}) => {
  return (
    <Fragment>
      <Header
        nextPost={nextPost}
        prevPost={prevPost}
        postTitle={postTitle}
        socialIcons={socialIcons}
        title={title}
      />
      {children}
      <Footer navigation={navigation} title={title} />
    </Fragment>
  );
};
