import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { Header } from 'components/Header'

const PostsSlugPage = ({ description, title }) => {
  return (
    <Fragment>
      <Header title={title} />
    </Fragment>
  )
}

export default PostsSlugPage
