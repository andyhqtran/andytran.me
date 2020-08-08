import { Global } from '@emotion/react';
import { css } from '@styled-system/css';
import React from 'react';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css({
        body: {
          backgroundColor: 'shade.inverse',
          color: 'shade.6',
          fontFamily: 'body',
          fontWeight: 'regular',
          lineHeight: 'body',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      })}
    />
  );
};
