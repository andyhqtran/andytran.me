import { Global } from '@emotion/react';
import { css } from '@styled-system/css';
import { rgba, transitions } from 'polished';
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
          ...transitions(['background-color', 'color'], '0.2s ease'),
          '&.light-mode': {
            '--color-inverse': '#FFFFFF',
            '--color-tint-0': rgba('#000000', 0),
            '--color-tint-1': rgba('#000000', 0.04),
            '--color-tint-2': rgba('#000000', 0.08),
            '--color-tint-3': rgba('#000000', 0.16),
            '--color-tint-4': rgba('#000000', 0.24),
            '--color-tint-5': rgba('#000000', 0.4),
            '--color-tint-6': rgba('#000000', 0.64),
            '--color-tint-7': rgba('#000000', 0.84),
            '--color-tint-8': rgba('#000000', 1),
          },
          '&.dark-mode': {
            '--color-inverse': '#101419',
            '--color-tint-0': rgba('#FFFFFF', 0),
            '--color-tint-1': rgba('#FFFFFF', 0.04),
            '--color-tint-2': rgba('#FFFFFF', 0.08),
            '--color-tint-3': rgba('#FFFFFF', 0.16),
            '--color-tint-4': rgba('#FFFFFF', 0.24),
            '--color-tint-5': rgba('#FFFFFF', 0.4),
            '--color-tint-6': rgba('#FFFFFF', 0.64),
            '--color-tint-7': rgba('#FFFFFF', 0.84),
            '--color-tint-8': rgba('#FFFFFF', 1),
          },
        },
      })}
    />
  );
};
