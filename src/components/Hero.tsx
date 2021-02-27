import React from 'react';

import { Navigation } from 'components/Navigation';
import { PageTitle } from 'components/PageTitle';
import { Box, BoxProps } from 'primitives/Box';

export type HeroProps = BoxProps & {
  description: string;
  navigation: {
    label: string;
    url: string;
  }[];
  title: string;
};

export const Hero = ({
  css,
  description,
  navigation,
  title,
  ...restOfProps
}: HeroProps) => {
  return (
    <Box
      css={{
        px: 56,
        pt: 40,
        pb: 64,

        /** @todo remove this typecasting */
        ...(css as {}),
      }}
      {...restOfProps}
    >
      <PageTitle
        description={description}
        css={{ maxWidth: 526 }}
        title={title}
      />
      {navigation && <Navigation items={navigation} css={{ mt: 24 }} />}
    </Box>
  );
};
