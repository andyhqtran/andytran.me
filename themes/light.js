import { rgba } from 'polished'

const colors = {
  black: '#000000',
  primary: '#1A62CC',
  shade: [
    rgba('#000000', 0.04),
    rgba('#000000', 0.08),
    rgba('#000000', 0.16),
    rgba('#000000', 0.24),
    rgba('#000000', 0.4),
    rgba('#000000', 0.64),
    rgba('#000000', 0.84),
    rgba('#000000', 1)
  ],
  white: '#FFFFFF'
}

colors.shade.inverse = '#FFFFFF'
colors.background = colors.white // #FFFFFF
colors.body = colors.shade[6] // #000000, 0.84
colors.border = colors.shade[1] // #000000, 0.08
colors.buttonText = colors.shade[7] // #000000, 1
colors.contrast = colors.shade[0] // #000000, 0.04
colors.description = colors.shade[6] // #000000, 0.64
colors.heading = colors.shade[7] // #000000, 1

export default {
  colors
}
