import React from 'react';
import SyntaxHighlighter, {
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import {
  a11yDark,
  a11yLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { useMountedState } from 'react-use';
import useDarkMode from 'use-dark-mode';

import { Box, BoxProps } from 'primitives/Box';

export type PreformattedTextProps = BoxProps<HTMLPreElement> &
  SyntaxHighlighterProps;

export const PreformattedText = ({ ...restOfProps }: PreformattedTextProps) => {
  const darkMode = useDarkMode(true);
  const isMounted = useMountedState();

  if (!isMounted) return null;

  return (
    <Box
      as={SyntaxHighlighter}
      customStyle={{ background: null, padding: 32 }}
      style={!isMounted && !darkMode.value ? a11yLight : a11yDark}
      {...restOfProps}
      css={{
        backgroundColor: 'tint1',
        borderRadius: 4,
        fontFamily: 'Courier, monospace',
        fontSize: 18,
        lineHeight: '20px',
        code: {
          fontFamily: 'Courier, monospace',
        },
        ...css,
      }}
    />
  );
};
