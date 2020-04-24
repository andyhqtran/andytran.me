import { rgba } from 'polished'

const colors = {
  black: '#000000',
  primary: '#2B67BF',
  grayscale: [
    rgba('#000000', 0),
    rgba('#000000', 0.04),
    rgba('#000000', 0.08),
    rgba('#000000', 0.12),
    rgba('#000000', 0.16),
    rgba('#000000', 0.2),
    rgba('#000000', 0.24),
    rgba('#000000', 0.28),
    rgba('#000000', 0.32),
    rgba('#000000', 0.36),
    rgba('#000000', 0.4),
    rgba('#000000', 0.44),
    rgba('#000000', 0.48),
    rgba('#000000', 0.52),
    rgba('#000000', 0.56),
    rgba('#000000', 0.6),
    rgba('#000000', 0.64),
    rgba('#000000', 0.68),
    rgba('#000000', 0.72),
    rgba('#000000', 0.76),
    rgba('#000000', 0.8),
    rgba('#000000', 0.84),
    rgba('#000000', 0.88),
    rgba('#000000', 0.92),
    rgba('#000000', 0.96),
    rgba('#000000', 1)
  ],
  white: '#FFFFFF'
}

colors.background = colors.white // #FFFFFF
colors.body = colors.grayscale[16] // #000000, 0.64
colors.border = colors.grayscale[3] // #000000, 0.12
colors.buttonText = colors.grayscale[25] // #000000, 1
colors.contrast = colors.grayscale[1] // #000000, 0.04
colors.heading = colors.grayscale[25] // #000000, 1

export default {
  colors
}
