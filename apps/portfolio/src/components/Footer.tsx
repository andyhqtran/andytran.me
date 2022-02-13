import React from 'react';

import { Container, ContainerProps } from 'components/Container';
import { Navigation } from 'components/Navigation';
import { Box } from 'primitives/Box';
import { ThemeSwitcher } from '~/components/ThemeSwitcher';

export type FooterProps = ContainerProps & {
  navigation: {
    label: string;
    url: string;
  }[];
  title: string;
};

export const Footer = ({ navigation, title, ...restOfProps }: FooterProps) => {
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

            <ThemeSwitcher />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
