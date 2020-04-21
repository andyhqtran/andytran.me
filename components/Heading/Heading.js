import { pick } from '@styled-system/props'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledHeading } from './Heading.styles'

const Heading = ({ children, className, variant, ...restOfProps }) => {
  return (
    <StyledHeading
      as={variant}
      className={className}
      variant={variant}
      {...pick(restOfProps)}
    >
      {children}
    </StyledHeading>
  )
}

Heading.defaultProps = {
  variant: 'h1'
}

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.typography
}

export default Heading
