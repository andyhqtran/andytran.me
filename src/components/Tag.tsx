import Link from 'next/link';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';
import { Image } from 'primitives/Image';
import VisuallyHidden from '@reach/visually-hidden';

export type TagProps = BoxProps & {
  description: string;
  image: string;
  name: string;
  slug: string;
};

export const Tag = ({ description, css, image, name, slug }: TagProps) => {
  return (
    <Link as={`/tag/${slug}`} href='/tag/[slug]' passHref>
      <Box
        css={{
          display: 'block',
          backgroundColor: '$gray100',
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
            boxShadow: '0 0 0 2px $colors$blue500',
          },

          /** @todo remove this typecasting */
          ...(css as {}),
        }}
      >
        <VisuallyHidden>{name}</VisuallyHidden>
        <Image alt={description} src={image} title={name} />
      </Box>
    </Link>
  );
};
