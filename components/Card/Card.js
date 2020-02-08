import React from 'react';

import { StyledCard } from './Card.styles';

const Card = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
};

export default Card;
