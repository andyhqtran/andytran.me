import { pick } from '@styled-system/props';
import propTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';
import React from 'react';

import {
  StyledWindow,
  StyledWindowButton,
  StyledWindowToolbar,
} from './Window.styles';

export const Window = ({ children, className, ...restOfProps }) => {
  return (
    <StyledWindow className={className} {...pick(restOfProps)}>
      <StyledWindowToolbar>
        <StyledWindowButton />
        <StyledWindowButton />
        <StyledWindowButton />
      </StyledWindowToolbar>
      {children}
    </StyledWindow>
  );
};

Window.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
};
