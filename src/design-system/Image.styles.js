import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  border,
  color,
  compose,
  grid,
  layout,
  position,
  space,
} from 'styled-system';

export const StyledImage = styled('img', { shouldForwardProp })(
  {
    display: 'block',
    maxWidth: '100%',
  },
  compose(border, color, grid, layout, position, space),
);
