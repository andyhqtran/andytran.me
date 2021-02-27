import { MotionProps, motion } from 'framer-motion';
import Link from 'next/link';
import { rgba } from 'polished';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';
import { Image } from 'primitives/Image';

export type TagProps = BoxProps<HTMLAnchorElement> &
  MotionProps & {
    description: string;
    image: string;
    name: string;
    slug: string;
  };

export const Tag = ({
  description,
  css,
  image,
  name,
  slug,
  ...restOfProps
}: TagProps) => {
  return (
    <Link as={`/tag/${slug}`} passHref href='/tag/[slug]'>
      <Box
        css={{
          display: 'block',
          backgroundColor: 'tint1',
          width: 56,
          height: 56,
          borderRadius: 28,
          overflow: 'hidden',
          cursor: 'pointer',
          userSelect: 'none',
          '&:focus': {
            outline: 'none',
          },
          '&:focus-visible': {
            borderColor: 'transparent',
            boxShadow: ({ colors }) =>
              `0 0 0 2px ${rgba(colors.primary, 0.36)}`,
          },
          ...css,
        }}
        as={motion.a}
        whileTap={{ scale: 0.94 }}
        {...restOfProps}
      >
        <Image alt={description} src={image} title={name} />
      </Box>
    </Link>
  );
};
