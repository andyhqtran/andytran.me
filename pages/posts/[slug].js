import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { getPosts, getPostBySlug } from 'api/posts'
import { getSettings } from 'api/settings'
import { Block } from 'components/Block'
import { PostTitle } from 'components/PostTitle'

const PostsSlugPage = ({ post, title }) => {
  return (
    <Fragment>
      <Block maxWidth={1184} mx='auto' width='100%'>
        <PostTitle
          excerpt={post.excerpt}
          title={post.title}
        />
      </Block>
    </Fragment>
  )
}

PostsSlugPage.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string,
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
      post,
      title
    }
  }
}

export default PostsSlugPage
