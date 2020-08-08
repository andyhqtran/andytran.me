import { rgba, transitions } from 'polished';
import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export type ButtonProps = BoxProps;

export const Button = (props: ButtonProps) => {
  return (
    <Box
      as='button'
      {...props}
      __css={{
        outline: 'none',
        backgroundColor: 'transparent',
        height: 56,
        paddingRight: 8,
        paddingLeft: 8,
        border: '1px solid',
        borderColor: 'shade.1',
        borderRadius: 28,
        color: 'body',
        fontSize: 'body',
        letterSpacing: -0.2,
        cursor: 'pointer',
        ...transitions(['background-color', 'box-shadow'], '0.2s ease'),
        '&:hover': {
          backgroundColor: 'shade.0',
        },
        '&:focus': {
          backgroundColor: 'shade.1',
          // boxShadow: ({ colors }) => `0 0 0 4px ${rgba(colors.primary, 0.36)}`,
        },
      }}
      __themeKey='buttons'
    />
  );
};
