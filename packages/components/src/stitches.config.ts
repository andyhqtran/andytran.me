import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export * from '@stitches/react';

export const stitchesConfig = createStitches({
  prefix: '',
  theme: {
    colors: {
      background: 'hsla(0deg, 0%, 100%, 1)',
      black: 'hsl(0deg, 0%, 0%)',
      blue100: 'hsla(216deg, 77%, 45%, 0.04)',
      blue200: 'hsla(216deg, 77%, 45%, 0.08)',
      blue300: 'hsla(216deg, 77%, 45%, 0.16)',
      blue400: 'hsla(216deg, 77%, 45%, 0.24)',
      blue500: 'hsla(216deg, 77%, 45%, 0.4)',
      blue600: 'hsla(216deg, 77%, 45%, 0.64)',
      blue700: 'hsla(216deg, 77%, 45%, 0.84)',
      blue800: 'hsla(216deg, 77%, 45%, 1)',
      gray100: 'hsla(0deg, 0%, 0%, 0.04)',
      gray200: 'hsla(0deg, 0%, 0%, 0.08)',
      gray300: 'hsla(0deg, 0%, 0%, 0.16)',
      gray400: 'hsla(0deg, 0%, 0%, 0.24)',
      gray500: 'hsla(0deg, 0%, 0%, 0.4)',
      gray600: 'hsla(0deg, 0%, 0%, 0.64)',
      gray700: 'hsla(0deg, 0%, 0%, 0.84)',
      gray800: 'hsla(0deg, 0%, 0%, 1)',
      white: 'hsl(0deg, 0%, 100%)',
    },
    fonts: {
      inter: 'Inter, -apple-system, system-ui, sans-serif',
    },
    fontWeights: {
      black: '900',
      bold: '700',
      semibold: '600',
      medium: '500',
      regular: '400',
    },
  },
  media: {
    desktop: '(min-width: 1024px)',
    desktopLarge: '(min-width: 1296px)',
    tablet: '(min-width: 768px)',
  },
  utils: {
    marginX: (value: Stitches.PropertyValue<'marginLeft' | 'marginRight'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'marginTop' | 'marginBottom'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (
      value: Stitches.PropertyValue<'paddingLeft' | 'paddingRight'>,
    ) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (
      value: Stitches.PropertyValue<'paddingTop' | 'paddingBottom'>,
    ) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = stitchesConfig;

export const globalStyles = globalCss({
  body: {
    backgroundColor: '$background',
  },
});

export const darkTheme = createTheme('dark-mode', {
  colors: {
    background: 'hsla(213deg, 22%, 8%, 1)',
    black: 'hsl(0deg, 0%, 0%)',
    blue100: 'hsla(216deg, 77%, 45%, 0.04)',
    blue200: 'hsla(216deg, 77%, 45%, 0.08)',
    blue300: 'hsla(216deg, 77%, 45%, 0.16)',
    blue400: 'hsla(216deg, 77%, 45%, 0.24)',
    blue500: 'hsla(216deg, 77%, 45%, 0.4)',
    blue600: 'hsla(216deg, 77%, 45%, 0.64)',
    blue700: 'hsla(216deg, 77%, 45%, 0.84)',
    blue800: 'hsla(216deg, 77%, 45%, 1)',
    gray100: 'hsla(0deg, 0%, 100%, 0.04)',
    gray200: 'hsla(0deg, 0%, 100%, 0.08)',
    gray300: 'hsla(0deg, 0%, 100%, 0.16)',
    gray400: 'hsla(0deg, 0%, 100%, 0.24)',
    gray500: 'hsla(0deg, 0%, 100%, 0.4)',
    gray600: 'hsla(0deg, 0%, 100%, 0.64)',
    gray700: 'hsla(0deg, 0%, 100%, 0.84)',
    gray800: 'hsla(0deg, 0%, 100%, 1)',
    white: 'hsl(0deg, 0%, 100%)',
  },
});
