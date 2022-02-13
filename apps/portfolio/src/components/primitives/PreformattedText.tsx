import React, { useEffect, useState } from 'react';
import SyntaxHighlighter, {
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import {
  a11yDark,
  a11yLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { Box, BoxProps } from 'primitives/Box';
import { useTheme } from 'next-themes';

export type PreformattedTextProps = BoxProps & SyntaxHighlighterProps;

export const PreformattedText = ({
  css,
  ...restOfProps
}: PreformattedTextProps) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Box
      as={SyntaxHighlighter}
      customStyle={{ background: null, padding: 32 }}
      style={!isDarkMode ? a11yLight : a11yDark}
      {...restOfProps}
      css={{
        backgroundColor: '$gray100',
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
