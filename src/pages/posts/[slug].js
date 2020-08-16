import React, { Fragment } from 'react';

import {
  getPosts,
  getPostBySlug,
  getPreviousPost,
  getNextPost,
} from 'api/posts';
import { getSettings } from 'api/settings';
import { PostFeaturedImage } from 'components/PostFeaturedImage';
import { PostTitle } from 'components/PostTitle';
import { Box } from 'primitives/Box';
import { parseHTML } from 'utils/html-to-react';

const PostsSlugPage = ({ post, title }) => {
  return (
    <Fragment>
      <PostTitle excerpt={post.excerpt} tags={post.tags} title={post.title} />
      <PostFeaturedImage image={post.image} title={post.title} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '704px 1fr',
          width: '100%',
          maxWidth: 1072,
          mt: 20,
          mx: 'auto',
        }}
      >
        <Box as='article'>{parseHTML(post.html)}</Box>
      </Box>
    </Fragment>
  );
};

export async function getStaticPaths() {
  const posts = await getPosts({ include: 'tags,author', limit: 'all' });

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  const settings = await getSettings();

  const prevPost = await getPreviousPost(params.slug);
  const nextPost = await getNextPost(params.slug);

  return {
    props: {
      ...settings,
      prevPost,
      nextPost,
      post: {
        excerpt: post.excerpt,
        html: post.html,
        id: post.id,
        image: post.feature_image,
        slug: post.slug,
        tags:
          post.tags &&
          post.tags
            .filter((tag) => tag.visibility === 'public')
            .map((tag) => ({
              description: tag.description,
              id: tag.id,
              image: tag.feature_image,
              name: tag.name,
              slug: tag.slug,
              visibility: tag.visibility,
            })),
        title: post.title,
      },
    },
    revalidate: 1,
  };
}

export default PostsSlugPage;
