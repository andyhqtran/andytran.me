import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { getPosts, getPostBySlug } from 'api/posts'
import { getSettings } from 'api/settings'
import { Block } from 'components/Block'
import { PostFeaturedImage } from 'components/PostFeaturedImage'
import { PostTitle } from 'components/PostTitle'
import { parseHTML } from 'utils/html-to-react'

const PostsSlugPage = ({ post, title }) => {
  return (
    <Fragment>
      <PostTitle
        excerpt={post.excerpt}
        tags={post.tags}
        title={post.title}
      />
      <PostFeaturedImage
        image={post.image}
        title={post.title}
      />
      <Block display='grid' gridTemplateColumns='704px 1fr' maxWidth={1072} mt={20} mx='auto' width='100%'>
        <article>
          {parseHTML(post.html)}
        </article>
      </Block>
    </Fragment>
  )
}

PostsSlugPage.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string,
    html: PropTypes.string,
    image: PropTypes.string,
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
        html: post.html,
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
      },
      title
    }
  }
}

export default PostsSlugPage
