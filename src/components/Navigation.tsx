import { useRouter } from 'next/router';
import React from 'react';

import { Anchor } from 'primitives/Anchor';
import { Box, BoxProps } from 'primitives/Box';

export type NavigationProps = BoxProps & {
  items: { label: string; url: string }[];
};

export const Navigation = ({ items, ...restOfProps }: NavigationProps) => {
  const router = useRouter();
  const numberOfItems = items.length;

  return (
    <Box
      {...restOfProps}
      __css={{
        display: 'flex',
        alignItems: 'center',
        color: 'shade.7',
        fontSize: 18,
      }}
    >
      {items?.map((item, index) => {
        const isLastItem = numberOfItems === index + 1;

        return (
          <Anchor
            href={item.url}
            key={item.label}
            onClick={() => {
              window.analytics.track('Navigation link clicked', {
                pathname: router.pathname,
                name: item.label,
                url: item.url,
              });
            }}
            sx={{
              mr: isLastItem ? 0 : 16,
              color: 'inherit',
              fontSize: 'inherit',
            }}
          >
            {item.label}
          </Anchor>
        );
      })}
    </Box>
  );
};
