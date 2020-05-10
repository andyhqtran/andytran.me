import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { getPosts, getPostBySlug } from 'api/posts'
import { getSettings } from 'api/settings'
import { Block } from 'components/Block'
import { PostTitle } from 'components/PostTitle'

const PostsSlugPage = ({ post, title }) => {
  console.log(post.tags)
  return (
    <Fragment>
      <PostTitle
        excerpt={post.excerpt}
        tags={post.tags}
        title={post.title}
      />
      <Block maxWidth={1184} mx='auto' width='100%'>
      </Block>
    </Fragment>
  )
}

PostsSlugPage.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
      slug: PropTypes.string,
      visibility: PropTypes.string
    })),
    title: PropTypes.string
  }),
  title: PropTypes.string
}

export async function getStaticPaths () {
  const posts = await getPosts({ include: 'tags,author', limit: 'all' })

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const post = await getPostBySlug(params.slug)
  const { title } = await getSettings()

  return {
    props: {
      post: {
        excerpt: post.excerpt,
        id: post.id,
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
      },
      title
    }
  }
}

export default PostsSlugPage
