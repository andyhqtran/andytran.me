import React from 'react';

import { StyledButton } from './Button.styles';

const Button = ({ children, ...restOfProps }) => {
  return (
    <StyledButton {...restOfProps}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {};

export default Button;
