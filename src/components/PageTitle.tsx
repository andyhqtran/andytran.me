import Head from 'next/head';
import React from 'react';

import { Box, BoxProps } from 'primitives/Box';
import { Heading } from 'primitives/Heading';
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
      <Heading sx={{ mb: 16 }} variant='h1'>
        {title}
      </Heading>
      <Text css={{ color: '$gray600' }} variant='body-24'>
        {description}
      </Text>
    </Box>
  );
};
