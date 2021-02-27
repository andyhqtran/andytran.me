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
  image,
  sx,
  title,
  ...restOfProps
}: PostFeaturedImageProps) => {
  return (
    <Container
      {...restOfProps}
      sx={{
        backgroundColor: 'tint1',
        borderRadius: [0, 0, 0, 16],
        mt: 64,
        mb: 80,
        pt: 56,
        overflow: 'hidden',
      }}
    >
      <Card>
        <Browser sx={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
          <Image css={{ width: '100% ' }} title={title} src={image} />
        </Browser>
      </Card>
    </Container>
  );
};
