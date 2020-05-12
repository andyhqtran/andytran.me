import Router from 'next/router'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { Header } from 'components/Header'

/**
 * Tracks client-side page views with Segment
 */
Router.events.on('routeChangeComplete', url => {
  window.analytics.page(url)
})

const Layout = ({ children, postTitle, socialIcons, title }) => {
  return (
    <Fragment>
      <Header
        postTitle={postTitle}
        socialIcons={socialIcons}
        title={title}
      />
      {children}
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  postTitle: PropTypes.string,
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

export default Layout
