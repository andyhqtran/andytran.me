import { SystemStyleObject } from '@styled-system/css';

export type HeadingNames = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const headings: { [key in HeadingNames]: SystemStyleObject } = {
  h1: {
    fontSize: 70,
    fontWeight: 'black',
    letterSpacing: -2,
    lineHeight: '76px',
  },
  h2: {
    fontSize: 50,
    fontWeight: 'black',
    letterSpacing: -1,
    lineHeight: '52px',
  },
  h3: {
    fontSize: 32,
    fontWeight: 'black',
    letterSpacing: -1,
    lineHeight: '40px',
  },
  h4: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    lineHeight: '40px',
  },
  h5: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    lineHeight: '24px',
  },
  h6: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    lineHeight: '18px',
  },
};
