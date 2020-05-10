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

const Layout = ({ children, title }) => {
  return (
    <Fragment>
      <Header title={title} />
      {children}
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  title: PropTypes.string
}

export default Layout
