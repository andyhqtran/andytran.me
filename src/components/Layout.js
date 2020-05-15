import Router from 'next/router'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

/**
 * Tracks client-side page views with Segment
 */
Router.events.on('routeChangeComplete', url => {
  if (window.gtag) {
    window.gtag('config', process.env.GA_TRACKING_ID, {
      page_path: url
    })
  }

  if (window.analytics) {
    window.analytics.page(url)
  }
})

export const Layout = ({
  children,
  navigation,
  nextPost,
  postTitle,
  prevPost,
  socialIcons,
  title
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
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  navigation: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string
  })),
  nextPost: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string
  }),
  postTitle: PropTypes.string,
  prevPost: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string
  }),
  socialIcons: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOf([
      'CodePen',
      'Github',
      'LinkedIn',
      'Twitter'
    ]),
    url: PropTypes.string
  })),
  title: PropTypes.string
}
