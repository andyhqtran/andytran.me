import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import { Tag } from 'components/Tag';
import { Box, BoxProps } from 'primitives/Box';
import { Heading } from 'primitives/Heading';
import { Text } from 'primitives/Text';

export type PostTitleProps = BoxProps & {
  excerpt: string;
  tags: {
    description: string;
    id: string;
    image: string;
    name: string;
    slug: string;
  }[];
  title: string;
};

export const PostTitle = ({
  excerpt,
  tags,
  title,
  ...restOfProps
}: PostTitleProps) => {
  const numberOfTags = tags?.length ?? 0;

  return (
    <Box sx={{ maxWidth: 1072, mx: 'auto', pt: 80 }} {...restOfProps}>
      <Head>
        <title>{title}</title>
      </Head>
      <Box sx={{ display: 'flex', mb: 24 }}>
        {tags?.map((tag, index) => {
          const isLastTag = numberOfTags === index + 1;

          return (
            <Tag
              description={tag.description}
              image={tag.image}
              key={tag.id}
              name={tag.name}
              slug={tag.slug}
              sx={{ mr: isLastTag ? 0 : 16 }}
            />
          );
        })}
      </Box>
      <Heading sx={{ maxWidth: 704, mb: 16 }} variant='h1'>
        {title}
      </Heading>
      <Text
        sx={{
          maxWidth: 704,
          color: 'shade.5',
          fontSize: 24,
          lineHeight: '34px',
        }}
      >
        {excerpt}
      </Text>
    </Box>
  );
};
