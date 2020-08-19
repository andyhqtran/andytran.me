import { Global } from '@emotion/react';
import { css } from '@styled-system/css';
import React from 'react';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css({
        body: {
          backgroundColor: 'inverse',
          color: 'tint7',
          fontFamily: 'copy',
          fontWeight: 'regular',
          lineHeight: '28px',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      })}
    />
  );
};
