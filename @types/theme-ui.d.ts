import 'theme-ui';

declare module 'theme-ui' {
  export interface BoxOwnProps extends SpaceProps, ColorProps {
    as?: React.ElementType;
    variant?: string;
    sx?: SxStyleProp;
    __css?: InterpolationWithTheme<any>;
    __themeKey?: string;
  }
}
