import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import { Browser } from 'components/Browser';
import { Tag } from 'components/Tag';
import { Box } from 'primitives/Box';
import { Button } from 'primitives/Button';
import { Card, CardProps } from 'primitives/Card';
import { Heading } from 'primitives/Heading';
import { Image } from 'primitives/Image';
import { Text } from 'primitives/Text';

export type PostCardProps = CardProps & {
  excerpt: string;
  image: string;
  slug: string;
  tags: {
    description: string;
    id: string;
    image: string;
    name: string;
    slug: string;
  }[];
};

export const PostCard = ({
  excerpt,
  image,
  slug,
  sx,
  tags,
  title,
  ...restOfProps
}: PostCardProps) => {
  const router = useRouter();
  const [ref, inView] = useInView({ triggerOnce: true });
  const numberOfTags = tags?.length ?? 0;

  return (
    <Card
      animate={{ opacity: inView ? 1 : 0 }}
      as={motion.div}
      initial={{ opacity: 0 }}
      ref={ref}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        overflow: 'hidden',
        ...sx,
      }}
      {...restOfProps}
    >
      <Box
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 520,
          p: 56,
        }}
      >
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
        <Heading sx={{ mb: 16 }} variant='h2'>
          {title}
        </Heading>
        <Text sx={{ mb: 32, color: 'tint6' }}>{excerpt}</Text>
        <Link as={`/posts/${slug}`} href='/posts/[slug]' passHref>
          <Button
            as={motion.a}
            onClick={() => {
              window.analytics.track('Post card button clicked', {
                pathname: router.pathname,
                name: title,
                url: slug,
              });
            }}
          >
            View project &#10230;
          </Button>
        </Link>
      </Box>
      <Browser sx={{ position: 'relative', right: -20, top: 56, width: 620 }}>
        {image && inView && (
          <Image
            alt={title}
            src={image}
            sx={{
              position: 'absolute',
              top: 0,
              left: '50%',
              maxWidth: 'unset',
              height: '100%',
              transform: 'translateX(-50%)',
            }}
          />
        )}
      </Browser>
    </Card>
  );
};
