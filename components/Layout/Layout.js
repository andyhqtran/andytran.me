import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { Header } from 'components/Header'

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
