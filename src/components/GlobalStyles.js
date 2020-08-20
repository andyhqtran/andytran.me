import { Global } from '@emotion/react';
import { css } from '@styled-system/css';
import { transitions } from 'polished';
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
          '&.light-mode': {
            ...transitions(['background-color', 'color'], '0.2s ease'),
          },
        },
      })}
    />
  );
};
