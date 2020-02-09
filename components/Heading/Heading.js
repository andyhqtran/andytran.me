import PropTypes from 'prop-types'
import React from 'react'

import { StyledHeading } from './Heading.styles'

const Heading = ({ children, level, ...restOfProps }) => {
  const element = [1, 2, 3, 4, 5, 6].includes(level) ? `h${level}` : 'h6'

  return (
    <StyledHeading as={element} level={level} {...restOfProps}>
      {children}
    </StyledHeading>
  )
}

Heading.defaultProps = {
  level: 1
}

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
}

export default Heading
