import styled from 'styled-components';
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system';
import React from 'react';

export type BoxProps = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TypographyProps;

export const Box = styled('div')<BoxProps>(
  compose(
    background,
    border,
    color,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    typography,
  ),
);
