import React from 'react';
import useDarkMode from 'use-dark-mode';

import { Navigation } from 'components/Navigation';
import { Box, BoxProps } from 'primitives/Box';
import { MoonIcon, SunIcon } from 'primitives/Icon';
import { IconButton } from 'primitives/IconButton';

export type FooterProps = BoxProps & {
  navigation: {
    label: string;
    url: string;
  }[];
  title: string;
};

export const Footer = ({ navigation, title, ...restOfProps }: FooterProps) => {
  const darkMode = useDarkMode(true);

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
        borderColor: 'tint2',
        color: 'tint6',
        fontSize: 14,
      }}
    >
      <Box>Copyright &copy; {title}</Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Navigation
          items={navigation}
          sx={{ mr: 16, color: 'inherit', fontSize: 14 }}
        />
        <IconButton onClick={darkMode.toggle} size='small'>
          {/** Use this instead of darkMode.value to prevent SSR issues */}
          <MoonIcon size={16} sx={{ '.dark-mode &': { display: 'none' } }} />
          <SunIcon size={16} sx={{ '.light-mode &': { display: 'none' } }} />
        </IconButton>
      </Box>
    </Box>
  );
};
