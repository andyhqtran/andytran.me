import React from 'react';

import { Navigation } from 'components/Navigation';
import { Box, BoxProps } from 'primitives/Box';

export type FooterProps = BoxProps & {
  navigation: {
    label: string;
    url: string;
  }[];
  title: string;
};

export const Footer = ({ navigation, title, ...restOfProps }: FooterProps) => {
  return (
    <Box
      as='footer'
      {...restOfProps}
      __css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 1184,
        height: 88,
        mx: 'auto',
        my: 96,
        borderTop: '1px solid',
        borderColor: 'shade.1',
        color: 'shade.5',
        fontSize: 14,
      }}
    >
      <Box>Copyright &copy; {title}</Box>
      <Navigation items={navigation} sx={{ color: 'inherit', fontSize: 14 }} />
    </Box>
  );
};
