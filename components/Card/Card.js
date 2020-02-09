import PropTypes from 'prop-types'
import React from 'react'

import { StyledCard } from './Card.styles'

const Card = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Card
