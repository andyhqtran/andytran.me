import { rgba } from 'polished'

const colors = {
  black: '#000000',
  primary: '#1A62CC',
  shade: [
    rgba('#FFFFFF', 0.04),
    rgba('#FFFFFF', 0.08),
    rgba('#FFFFFF', 0.16),
    rgba('#FFFFFF', 0.24),
    rgba('#FFFFFF', 0.4),
    rgba('#FFFFFF', 0.64),
    rgba('#FFFFFF', 0.84),
    rgba('#FFFFFF', 1)
  ],
  white: '#FFFFFF'
}

colors.shade.inverse = '#101419'

export const dark = {
  colors
}
