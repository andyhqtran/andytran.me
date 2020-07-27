import styled from '@emotion/styled';
import { css } from '@styled-system/css';
import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';
import {
  border,
  compose,
  flexbox,
  layout,
  position,
  space,
} from 'styled-system';

export const StyledWindow = styled('div')(
  css({
    backgroundColor: 'shade.inverse',
    borderRadius: 3,
  }),
  (props) => ({
    boxShadow: `0 12px 24px ${rgba(themeGet('colors.black')(props), 0.04)}`,
  }),
  compose(border, flexbox, layout, position, space),
);

export const StyledWindowButton = styled('div')(
  {
    width: 8,
    height: 8,
  },
  css({
    backgroundColor: 'shade.0',
    borderRadius: 2,
    marginRight: 2,

    '&:last-of-type': {
      marginRight: 0,
    },
  }),
);

export const StyledWindowToolbar = styled('div')(
  {
    display: 'flex',
    alignItems: 'center',
    height: 48,
  },
  css({
    paddingLeft: 5,
    paddingRight: 5,
  }),
  (props) => ({
    boxShadow: `inset 0 -1px 0 ${themeGet('colors.shade.0')(props)}`,
  }),
);
