import React from 'react';

import { Browser } from 'components/Browser';
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
    <Card
      sx={{
        maxWidth: 1184,
        mt: 64,
        mb: 80,
        mx: 'auto',
        pl: 56,
        pr: 56,
        pt: 56,
        overflow: 'hidden',
        ...sx,
      }}
      {...restOfProps}
    >
      <Browser sx={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
        <Image title={title} src={image} width='100%' />
      </Browser>
    </Card>
  );
};
