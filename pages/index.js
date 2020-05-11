import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { getSettings } from 'api/settings'
import { Block } from 'components/Block'
import { PostCard } from 'components/PostCard'
import { Hero } from 'components/Hero'

const IndexPage = ({ description, navigation, title }) => {
  return (
    <Fragment>
      <Block maxWidth={1184} mx='auto' width='100%'>
        <Hero
          description={description}
          navigation={navigation}
          title={title}
        />
        <PostCard />
      </Block>
    </Fragment>
  )
}

IndexPage.propTypes = {
  description: PropTypes.string,
  navigation: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string
  })),
  title: PropTypes.string
}

export async function getStaticProps () {
  const { description, navigation, title } = await getSettings()

  return {
    props: {
      description,
      navigation,
      title
    }
  }
}

export default IndexPage
