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
      <Head>
        <title>{title}</title>
      </Head>
      <Heading sx={{ mb: 16 }} variant='h1'>
        {title}
      </Heading>
      <Text sx={{ color: 'shade.5', fontSize: 24, lineHeight: '34px' }}>
        {description}
      </Text>
    </Box>
  );
};
