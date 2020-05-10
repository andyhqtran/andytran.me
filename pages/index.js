import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { Block } from 'components/Block'
import { PostCard } from 'components/PostCard'
import { Hero } from 'components/Hero'

const IndexPage = ({ description, title }) => {
  return (
    <Fragment>
      <Block maxWidth={1184} mx='auto' width='100%'>
        <Hero
          description={description}
          title={title}
        />
        <PostCard />
      </Block>
    </Fragment>
  )
}

IndexPage.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}

export default IndexPage
