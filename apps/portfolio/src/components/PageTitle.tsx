import Head from 'next/head';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';
import { Text } from 'primitives/Text';

export type PageTitleProps = BoxProps & {
  description: string;
  title: string;
};

export const PageTitle = ({
  description,
  title,
  ...restOfProps
}: PageTitleProps) => {
  return (
    <Box {...restOfProps}>
      <Text as='h1' css={{ mb: 16 }} variant='heading-70'>
        {title}
      </Text>
      <Text as='p' css={{ color: '$gray600' }} variant='body-24'>
        {description}
      </Text>
    </Box>
  );
};
