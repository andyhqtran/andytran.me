/** @todo remove this later */
import { rem } from 'polished';

const space = [
  0,
  4,
  8,
  12,
  16,
  20,
  24,
  28,
  32,
  36,
  40,
  44,
  48,
  52,
  56,
  60,
  64,
  68,
  72,
  76,
  80,
  84,
  88,
  92,
  96,
  100,
  104,
  108,
  112,
  116,
  120,
  124,
  128,
  132,
  136,
  140,
];

const fonts = ['Inter, sans-serif'];

fonts.body = fonts[0]; // Inter
fonts.heading = fonts[0]; // Inter

const fontSizes = [
  rem(12),
  rem(14),
  rem(18),
  rem(21),
  rem(24),
  rem(40),
  rem(50),
  rem(70),
];

fontSizes.body = fontSizes[2]; // 18px
fontSizes.button = fontSizes[2]; // 18px
fontSizes.h1 = fontSizes[7]; // 70px
fontSizes.h2 = fontSizes[6]; // 50px
fontSizes.h3 = fontSizes[5]; // 32px
fontSizes.h4 = fontSizes[4]; // 24px
fontSizes.h5 = fontSizes[2]; // 18px
fontSizes.h6 = fontSizes[1]; // 14px
fontSizes.h7 = fontSizes[0]; // 12px

const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

fontWeights.thin = fontWeights[0]; // 100
fontWeights.extraLight = fontWeights[1]; // 200
fontWeights.light = fontWeights[2]; // 300
fontWeights.regular = fontWeights[3]; // 400
fontWeights.medium = fontWeights[4]; // 500
fontWeights.semiBold = fontWeights[5]; // 600
fontWeights.bold = fontWeights[6]; // 700
fontWeights.extraBold = fontWeights[7]; // 800
fontWeights.black = fontWeights[8]; // 900

const lineHeights = [
  rem(18),
  rem(22),
  rem(24),
  rem(28),
  rem(32),
  rem(34),
  rem(40),
  rem(52),
  rem(76),
];

lineHeights.body = lineHeights[3]; // 28px
lineHeights.h1 = lineHeights[8]; // 76px
lineHeights.h2 = lineHeights[7]; // 52px
lineHeights.h3 = lineHeights[6]; // 40px
lineHeights.h4 = lineHeights[6]; // 40px
lineHeights.h5 = lineHeights[2]; // 24px
lineHeights.h6 = lineHeights[0]; // 18px
lineHeights.h7 = lineHeights[0]; // 18px

const letterSpacings = [
  0,
  0.1,
  0.2,
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
  1.1,
  1.2,
  1.3,
  1.4,
  1.5,
  1.6,
  1.7,
  1.8,
  1.9,
  2,
];

letterSpacings.body = letterSpacings[2] * -1; // -0.2px
letterSpacings.h1 = letterSpacings[20] * -1; // -2px
letterSpacings.h2 = letterSpacings[10] * -1; // -1px
letterSpacings.h3 = letterSpacings[10] * -1; // -1px
letterSpacings.h4 = letterSpacings[3] * -1; // -0.3px
letterSpacings.h5 = letterSpacings[3] * -1; // -0.3px
letterSpacings.h6 = letterSpacings[3] * -1; // -0.3px
letterSpacings.h6alt = letterSpacings[8]; // 0.8px
letterSpacings.h7 = letterSpacings[3] * -1; // -0.3px
letterSpacings.h7alt = letterSpacings[8]; // 0.8px

const radii = {
  0: 0,
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  28: 28,
  32: 32,
  36: 36,
  40: 40,
};

export const common = {
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  radii,
};
