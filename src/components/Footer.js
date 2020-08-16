import React from 'react';

import { Navigation } from 'components/Navigation';
import { Box } from 'primitives/Box';

export const Footer = ({ navigation, title, ...restOfProps }) => {
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
      <Navigation color='inherit' fontSize={14} items={navigation} />
    </Box>
  );
};
