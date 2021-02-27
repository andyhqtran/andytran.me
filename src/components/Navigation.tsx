import { useRouter } from 'next/router';
import React from 'react';

import { Anchor } from 'primitives/Anchor';
import { Box, BoxProps } from 'primitives/Box';

export type NavigationProps = BoxProps & {
  items: { label: string; url: string }[];
};

export const Navigation = ({ css, items, ...restOfProps }: NavigationProps) => {
  const router = useRouter();
  const numberOfItems = items?.length ?? 0;

  return (
    <Box
      {...restOfProps}
      css={{
        display: 'flex',
        alignItems: 'center',
        color: '$gray800',
        fontSize: 18,

        /** @todo remove this typecasting */
        ...(css as {}),
      }}
    >
      {items?.map((item, index) => {
        const isLastItem = numberOfItems === index + 1;

        return (
          <Anchor
            css={{
              mr: isLastItem ? 0 : 16,
              color: 'inherit',
            }}
            href={item.url}
            key={item.label}
            onClick={() => {
              window.analytics.track('Navigation link clicked', {
                pathname: router.pathname,
                name: item.label,
                url: item.url,
              });
            }}
          >
            {item.label}
          </Anchor>
        );
      })}
    </Box>
  );
};
