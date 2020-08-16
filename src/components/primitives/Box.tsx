import styled, { StyledComponent } from '@emotion/styled';
import { SystemStyleObject, css, get } from '@styled-system/css';
import { ElementType, HTMLProps, SVGProps } from 'react';

export type Attributes<Element> = Element extends
  | SVGCircleElement
  | SVGElement
  | SVGPathElement
  | SVGSVGElement
  ? SVGProps<Element>
  : HTMLProps<Element>;

export type BoxProps<Element = HTMLElement | SVGElement> = Omit<
  Attributes<Element>,
  'as'
> & {
  __css?: SystemStyleObject;
  __themeKey?: string;
  as?: ElementType;
  sx?: SystemStyleObject;
  variant?: string | string[];
};

const sx = (props: BoxProps & { theme: any }) => css(props.sx)(props.theme);

const baseStyle = (props: BoxProps & { theme: any }) =>
  css(props.__css)(props.theme);

const variant = ({ theme, variant, __themeKey = 'variants' }) =>
  css(get(theme, __themeKey + '.' + variant, get(theme, variant)));

export const Box: StyledComponent<BoxProps> = styled.div(
  {
    minWidth: 0,
    margin: 0,
    boxSizing: 'border-box',
  },
  baseStyle,
  variant,
  sx,
);
