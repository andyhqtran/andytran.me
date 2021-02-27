import React from 'react';
import useDarkMode from 'use-dark-mode';

import { Container, ContainerProps } from 'components/Container';
import { Navigation } from 'components/Navigation';
import { Box } from 'primitives/Box';
import { MoonIcon, SunIcon } from 'primitives/Icon';
import { IconButton } from 'primitives/IconButton';
import VisuallyHidden from '@reach/visually-hidden';

export type FooterProps = ContainerProps & {
  navigation: {
    label: string;
    url: string;
  }[];
  title: string;
};

export const Footer = ({ navigation, title, ...restOfProps }: FooterProps) => {
  const darkMode = useDarkMode(true);

  return (
    <Box as='footer' {...restOfProps}>
      <Container>
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 88,
            my: 96,
            borderTop: '1px solid',
            borderColor: '$gray200',
            color: '$gray600',
            fontSize: 14,
          }}
        >
          <Box>Copyright &copy; {title}</Box>
          <Box css={{ display: 'flex', alignItems: 'center' }}>
            <Navigation
              items={navigation}
              css={{ mr: 16, color: 'inherit', fontSize: 14 }}
            />
            <IconButton
              css={{ color: 'inherit' }}
              onClick={darkMode.toggle}
              size='small'
            >
              <VisuallyHidden>
                Switch between dark and light mode
              </VisuallyHidden>
              {/** Use this instead of darkMode.value to prevent SSR issues */}
              <MoonIcon
                size='small'
                css={{ '.dark-mode &': { display: 'none' } }}
              />
              <SunIcon
                size='small'
                css={{ '.light-mode &': { display: 'none' } }}
              />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
