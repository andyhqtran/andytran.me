export type ColorNames =
  | 'black'
  | 'inverse'
  | 'primary'
  | 'tint0'
  | 'tint1'
  | 'tint2'
  | 'tint3'
  | 'tint4'
  | 'tint5'
  | 'tint6'
  | 'tint7'
  | 'tint8'
  | 'white';

export const colors: { [key in ColorNames]: string } = {
  black: '#000000',
  inverse: 'var(--color-inverse)',
  primary: '#1A62CC',
  tint0: 'var(--color-tint-0)',
  tint1: 'var(--color-tint-1)',
  tint2: 'var(--color-tint-2)',
  tint3: 'var(--color-tint-3)',
  tint4: 'var(--color-tint-4)',
  tint5: 'var(--color-tint-5)',
  tint6: 'var(--color-tint-6)',
  tint7: 'var(--color-tint-7)',
  tint8: 'var(--color-tint-8)',
  white: '#FFFFFF',
};
