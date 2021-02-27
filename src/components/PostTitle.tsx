import Head from 'next/head';
import React from 'react';

import { Container } from 'components/Container';
import { Tag } from 'components/Tag';
import { Box, BoxProps } from 'primitives/Box';
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
    <Container
      css={{ maxWidth: 1072, mx: 'auto', pt: 80, px: 56 }}
      {...restOfProps}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <Box css={{ display: 'flex', mb: 24 }}>
        {tags?.map((tag, index) => {
          const isLastTag = numberOfTags === index + 1;

          return (
            <Tag
              description={tag.description}
              image={tag.image}
              key={tag.id}
              name={tag.name}
              slug={tag.slug}
              css={{ mr: isLastTag ? 0 : 16 }}
            />
          );
        })}
      </Box>
      <Text as='h1' css={{ maxWidth: 704, mb: 16 }} variant='heading-70'>
        {title}
      </Text>
      <Text as='p' css={{ maxWidth: 704, color: '$gray600' }} variant='body-24'>
        {excerpt}
      </Text>
    </Container>
  );
};
