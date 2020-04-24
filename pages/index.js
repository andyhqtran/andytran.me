import GhostContentAPI from '@tryghost/content-api'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { Block } from 'components/Block'
import { PostCard } from 'components/PostCard'
import { Header } from 'components/Header'
import { Heading } from 'components/Heading'
import { Paragraph } from 'components/Paragraph'

const IndexPage = ({ description, title }) => {
  return (
    <Fragment>
      <Header />
      <Block maxWidth={1184} mx='auto' width='100%'>
        <Block px={14} py={16}>
          <Heading mb={6} variant='h1'>
            {title}
          </Heading>
          <Paragraph color='description' fontSize={12} lineHeight={17}>
            {description}
          </Paragraph>
        </Block>
        <PostCard />
      </Block>
    </Fragment>
  )
}

IndexPage.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}

export async function getStaticProps () {
  const api = new GhostContentAPI({
    url: process.env.GHOST_API_URL,
    key: process.env.GHOST_CONTENT_API_KEY,
    version: 'v3'
  })

  const { description, title } = await api
    .settings
    .browse({
      limit: 'all'
    })

  return {
    props: {
      description,
      title
    }
  }
}

export default IndexPage
