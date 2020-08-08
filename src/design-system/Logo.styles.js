import styled from '@emotion/styled';
import { css } from '@styled-system/css';
import {
  background,
  color,
  compose,
  layout,
  position,
  space,
} from 'styled-system';

export const StyledLogo = styled('div')(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: '100%',
    overflow: 'hidden',
  },
  css({
    backgroundColor: 'shade.0',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    lineHeight: 28,
  }),
  compose(background, color, layout, position, space),
);
