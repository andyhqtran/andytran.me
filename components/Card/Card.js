import { pick } from '@styled-system/props'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledCard } from './Card.styles'

const Card = ({ children, className, ...restOfProps }) => {
  return (
    <StyledCard
      className={className}
      {...pick(restOfProps)}
    >
      {children}
    </StyledCard>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  ...propTypes.background,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space
}

export default Card
