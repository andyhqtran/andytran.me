import styled from '@emotion/styled';
import { css } from '@styled-system/css';
import {
  color,
  compose,
  flexbox,
  grid,
  layout,
  space,
  typography,
} from 'styled-system';

export const StyledNavigation = styled('nav')(
  {
    display: 'flex',
    alignItems: 'center',
  },
  css({
    color: 'shade.7',
    fontSize: 2,
  }),
  compose(color, flexbox, grid, layout, space, typography),
);
