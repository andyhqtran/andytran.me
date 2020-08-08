export type FontWeights = 'black' | 'bold' | 'regular';

export const fontWeights: { [key in FontWeights]: number } = {
  black: 900,
  bold: 700,
  regular: 400,
};
