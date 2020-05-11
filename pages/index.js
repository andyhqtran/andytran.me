import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { getPosts } from 'api/posts'
import { getSettings } from 'api/settings'
import { Block } from 'components/Block'
import { PostCard } from 'components/PostCard'
import { Hero } from 'components/Hero'

const IndexPage = ({ description, navigation, posts, title }) => {
  return (
    <Fragment>
      <Block maxWidth={1184} mx='auto' width='100%'>
        <Hero
          description={description}
          navigation={navigation}
          title={title}
        />
        {posts && posts.map((post) => (
          <PostCard
            excerpt={post.excerpt}
            key={post.id}
            mb={8}
            slug={post.slug}
            tags={post.tags}
            title={post.title}
          />
        ))}
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
  posts: PropTypes.arrayOf(PropTypes.shape({
    excerpt: PropTypes.string,
    image: PropTypes.string,
    slug: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
      slug: PropTypes.string,
      visibility: PropTypes.string
    })),
    title: PropTypes.string
  })),
  title: PropTypes.string
}

export async function getStaticProps () {
  const posts = await getPosts({ include: 'tags,author', limit: 'all' })
  const { description, navigation, title } = await getSettings()

  return {
    props: {
      description,
      navigation,
      posts: posts.map((post) => ({
        excerpt: post.excerpt,
        id: post.id,
        image: post.feature_image,
        slug: post.slug,
        tags: post.tags && post.tags.filter((tag) => tag.visibility === 'public').map((tag) => ({
          description: tag.description,
          id: tag.id,
          image: tag.feature_image,
          name: tag.name,
          slug: tag.slug,
          visibility: tag.visibility
        })),
        title: post.title
      })),
      title
    }
  }
}

export default IndexPage
