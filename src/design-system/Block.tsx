import { pick } from '@styled-system/props';
import propTypes from '@styled-system/prop-types';
import {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  SpaceProps,
} from 'styled-system';
import PropTypes from 'prop-types';
import * as React from 'react';

import { motionPick } from 'utils/motion-props';
import { StyledBlock } from './Block.styles';

export interface BlockProps
  extends BackgroundProps,
    BorderProps,
    FlexboxProps,
    SpaceProps {
  children: React.ReactNode;
  className: string;
  onClick?: React.MouseEvent<HTMLDivElement>;
}

export const Block: React.FunctionComponent<BlockProps> = ({
  children,
  className,
  onClick,
  ...restOfProps
}) => {
  return (
    <StyledBlock
      className={className}
      {...motionPick(restOfProps)}
      {...pick(restOfProps)}
    >
      {children}
    </StyledBlock>
  );
};

Block.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  onClick: PropTypes.string,
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.grid,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.space,
  ...propTypes.typography,
};
