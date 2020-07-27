import { rgba } from 'polished';

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
    rgba('#000000', 1),
  ],
  white: '#FFFFFF',
};

colors.shade.inverse = '#FFFFFF';

export const light = {
  colors,
};
