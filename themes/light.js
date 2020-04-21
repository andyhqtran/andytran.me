import { rgba } from 'polished'

const colors = {
  primary: '#2B67BF',
  grayscale: [
    rgba('#000000', 1),
    rgba('#000000', 0.9),
    rgba('#000000', 0.64),
    rgba('#000000', 0.4),
    rgba('#000000', 0.24),
    rgba('#000000', 0.16),
    rgba('#000000', 0.08),
    rgba('#000000', 0.04),
    rgba('#FFFFFF', 1)
  ]
}

colors.background = colors.grayscale[8] // #FFFFFF, 1
colors.black = colors.grayscale[0] // #000000, 1
colors.body = colors.grayscale[1] // #000000, 0.9
colors.contrast = colors.grayscale[7] // #000000, 0.04
colors.heading = colors.grayscale[0] // #000000, 1
colors.white = colors.grayscale[8] // #FFFFFF, 1

export default {
  colors
}
