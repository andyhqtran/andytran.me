import React, { Fragment } from 'react';

import { getPosts } from 'api/posts';
import { getSettings } from 'api/settings';
import { PostCard } from 'components/PostCard';
import { Hero } from 'components/Hero';
import { Layout } from 'components/Layout';
import { Box } from 'primitives/Box';

const IndexPage = ({ description, navigation, posts, title }) => {
  return (
    <Fragment>
      <Box sx={{ width: '100%', maxWidth: 1184, mx: 'auto' }}>
        <Hero description={description} navigation={navigation} title={title} />
        {posts &&
          posts.map((post) => (
            <PostCard
              excerpt={post.excerpt}
              key={post.id}
              slug={post.slug}
              sx={{ mb: 24 }}
              tags={post.tags}
              title={post.title}
            />
          ))}
      </Box>
    </Fragment>
  );
};

IndexPage.layout = Layout;

export async function getStaticProps() {
  const posts = await getPosts({ include: 'tags,author', limit: 'all' });
  const settings = await getSettings();

  return {
    props: {
      ...settings,
      posts: posts.map((post) => ({
        excerpt: post.excerpt,
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
      })),
    },
    revalidate: 1,
  };
}

export default IndexPage;
