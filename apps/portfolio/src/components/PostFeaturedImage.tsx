import React from 'react';

import { Browser } from 'components/Browser';
import { Container } from 'components/Container';
import { Card, CardProps } from 'primitives/Card';
import { Image } from 'primitives/Image';

export type PostFeaturedImageProps = CardProps & {
  image: string;
  title: string;
};

export const PostFeaturedImage = ({
  css,
  image,
  title,
  ...restOfProps
}: PostFeaturedImageProps) => {
  return (
    <Container
      css={{
        backgroundColor: '$gray100',
        borderRadius: 0,
        mt: 64,
        mb: 80,
        pt: 56,
        overflow: 'hidden',

        when: {
          largeDesktop: {
            borderRadius: 16,
          },
        },

        /** @todo remove this typecasting */
        ...(css as {}),
      }}
      {...restOfProps}
    >
      <Card>
        <Browser
          css={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
        >
          <Image css={{ width: '100% ' }} title={title} src={image} />
        </Browser>
      </Card>
    </Container>
  );
};
