import styled from '@emotion/styled';
import { css } from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { themeGet } from '@styled-system/theme-get';
import { rem, rgba, transitions } from 'polished';
import {
  background,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system';

export const StyledButton = styled('button', { shouldForwardProp })(
  {
    outline: 'none',
    backgroundColor: 'transparent',
    height: 56,
    border: 0,
    borderRadius: 28,
    letterSpacing: rem(-0.2),
    cursor: 'pointer',
    '&:hover': {
      boxShadow: 'none',
      '&:focus': {
        background: 'red',
      },
    },
  },
  transitions('background-color', '0.2s ease'),
  css({
    paddingLeft: 8,
    paddingRight: 8,
    color: 'shade.7',
    fontSize: 'body',
    '&:hover': {
      backgroundColor: 'shade.0',
    },
    '&:focus': {
      backgroundColor: 'shade.1',
    },
  }),
  (props) => ({
    boxShadow: `inset 0 0 0 1px ${themeGet('colors.shade.1')(props)}`,
    '&:focus': {
      boxShadow: `0 0 0 4px ${rgba(themeGet('colors.primary')(props), 0.36)}`,
    },
  }),
  compose(background, color, flexbox, layout, position, space, typography),
);
