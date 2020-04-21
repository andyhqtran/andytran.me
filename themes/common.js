import { rem } from 'polished'

const space = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140]

const fonts = ['Inter, sans-serif']

fonts.body = fonts[0] // Inter
fonts.heading = fonts[0] // Inter

const fontSizes = [rem(0), rem(2), rem(4), rem(6), rem(8), rem(10), rem(12), rem(14), rem(16), rem(18), rem(20), rem(22), rem(24), rem(26), rem(28), rem(30), rem(32), rem(34), rem(36), rem(38), rem(40), rem(42), rem(44), rem(46), rem(48), rem(50), rem(52), rem(54), rem(56), rem(58), rem(60), rem(62), rem(64), rem(66), rem(68), rem(70), rem(72), rem(74), rem(76), rem(78), rem(80)]

fontSizes.body = fontSizes[9] // 18px
fontSizes.button = fontSizes[9] // 18px
fontSizes.h1 = fontSizes[35] // 70px
fontSizes.h2 = fontSizes[25] // 50px
fontSizes.h3 = fontSizes[16] // 32px
fontSizes.h4 = fontSizes[12] // 24px
fontSizes.h5 = fontSizes[9] // 18px
fontSizes.h6 = fontSizes[7] // 18px

const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900]

fontWeights.thin = fontWeights[0] // 100
fontWeights.extraLight = fontWeights[1] // 200
fontWeights.light = fontWeights[2] // 300
fontWeights.regular = fontWeights[3] // 400
fontWeights.medium = fontWeights[4] // 500
fontWeights.semiBold = fontWeights[5] // 600
fontWeights.bold = fontWeights[6] // 700
fontWeights.extraBold = fontWeights[7] // 800
fontWeights.black = fontWeights[8] // 900

const lineHeights = [rem(0), rem(2), rem(4), rem(6), rem(8), rem(10), rem(12), rem(14), rem(16), rem(18), rem(20), rem(22), rem(24), rem(26), rem(28), rem(30), rem(32), rem(34), rem(36), rem(38), rem(40), rem(42), rem(44), rem(46), rem(48), rem(50), rem(52), rem(54), rem(56), rem(58), rem(60), rem(62), rem(64), rem(66), rem(68), rem(70), rem(72), rem(74), rem(76), rem(78), rem(80)]

lineHeights.body = lineHeights[14] // 28px
lineHeights.h1 = lineHeights[38] // 76px
lineHeights.h2 = lineHeights[26] // 52px
lineHeights.h3 = lineHeights[20] // 40px
lineHeights.h4 = lineHeights[20] // 40px
lineHeights.h5 = lineHeights[12] // 24px
lineHeights.h6 = lineHeights[9] // 18px

const letterSpacings = [rem(0), rem(0.1), rem(0.2), rem(0.3), rem(0.4), rem(0.5), rem(0.6), rem(0.7), rem(0.8), rem(0.9), rem(1), rem(1.1), rem(1.2), rem(1.3), rem(1.4), rem(1.5), rem(1.5), rem(1.6), rem(1.7), rem(1.8), rem(1.9), rem(2)]

letterSpacings.body = letterSpacings[2] // 0.2px
letterSpacings.h1 = rem(20) // 2px
letterSpacings.h2 = rem(10) // 1px
letterSpacings.h3 = rem(10) // 1px
letterSpacings.h4 = rem(3) // 0.3px
letterSpacings.h5 = rem(3) // 0.3px
letterSpacings.h6 = rem(3) // 0.3px

const radii = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40]

export default {
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  radii
}
