import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { Block } from 'components/Block'
import { Button } from 'components/Button'
import { Card } from 'components/Card'
import { PostCard } from 'components/PostCard'
import { Header } from 'components/Header'
import { Heading } from 'components/Heading'

const IndexPage = ({ description, title }) => {
  return (
    <Fragment>
      <Header />
      <Block maxWidth={1184} mx='auto' width='100%'>
        <Heading variant='h1'>{title}</Heading>
        {description}
        <PostCard />
      </Block>
    </Fragment>
  )
}

IndexPage.propTypes = {
  settings: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string
  }).isRequired
}

export default IndexPage
