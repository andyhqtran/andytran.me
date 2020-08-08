import styled from '@emotion/styled';
import { css } from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { color, compose, space, typography, variant } from 'styled-system';

export const StyledHeading = styled('h1', { shouldForwardProp })(
  {
    margin: 0,
  },
  css({
    color: 'shade.7',
  }),
  variant({
    prop: 'variant',
    variants: {
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
      'h6-alt': {
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 0.8,
        lineHeight: '18px',
        textTransform: 'uppercase',
      },
      h7: {
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: -0.3,
        lineHeight: '18px',
      },
      'h7-alt': {
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 0.8,
        lineHeight: '18px',
        textTransform: 'uppercase',
      },
    },
  }),
  compose(color, space, typography),
);
